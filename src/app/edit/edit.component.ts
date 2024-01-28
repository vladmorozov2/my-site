import { Component } from '@angular/core';
import { AboutMeDataService } from '../about-me-data.service';
import { Select, Store } from '@ngxs/store';

import { SaveDescription } from '../ngxs_parts/edit.actions';
import { EditSelectors } from '../ngxs_parts/edit.selectors';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  @Select(EditSelectors.smallDescription)
  smallDescription$!: Observable<string>;

  newBigDescription = '';
  newGoodAt = '';

  constructor(
    private aboutMeDataService: AboutMeDataService,
    private store: Store
  ) {}

  data = this.aboutMeDataService;

  myForm = new FormGroup({
    newSmallDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  saveSmallDescription() {
    if (this.myForm.valid) {
      this.store.dispatch(
        new SaveDescription({
          smallDescription: this.myForm.value.newSmallDescription!,
        })
      );
      this.myForm.reset();
    }
  }
  saveBigDescription() {
    this.data.aboutMeData.bigDescription = this.newBigDescription;
    this.newBigDescription = '';
  }
  clear() {
    this.myForm.value.newSmallDescription = '';
    this.newBigDescription = '';
    this.newGoodAt = '';
  }
  add() {
    this.data.aboutMeData.goodAt.push(this.newGoodAt);
    this.newGoodAt = '';
  }
}
