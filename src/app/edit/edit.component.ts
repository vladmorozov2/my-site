import { Component } from '@angular/core';
import { AboutMeDataService } from '../about-me-data.service';
import { Select, Store } from '@ngxs/store';

import { SaveDescription } from '../ngxs_parts/edit.actions';
import { EditSelectors } from '../ngxs_parts/edit.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Select(EditSelectors.smallDescription) 
  smallDescription$!: Observable<string>;

  constructor(private aboutMeDataService: AboutMeDataService,private store: Store){}
  data = this.aboutMeDataService

  description$ = this.store.select(state => state.edit.smallDescription);

  newDescription = '';

  saveDescription() {
    this.store.dispatch(new SaveDescription({smallDescription:this.newDescription}));
    this.newDescription = '';
  }

}
