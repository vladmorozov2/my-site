import { Component } from '@angular/core';
import { AboutMeDataService } from '../about-me-data.service';
import { Select, Store } from '@ngxs/store';
import { EditSelectors } from '../ngxs_parts/edit.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-me-preview',
  templateUrl: './about-me-preview.component.html',
  styleUrls: ['./about-me-preview.component.css'],
})
export class AboutMePreviewComponent {
  constructor(public aboutMeDataService: AboutMeDataService,private store: Store) {}
  @Select(EditSelectors.smallDescription) 
  smallDescription$!: Observable<string>;
  data = this.aboutMeDataService
  
}

