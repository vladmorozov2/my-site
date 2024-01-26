import { Component } from '@angular/core';
import { AboutMeDataService } from '../about-me-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private aboutMeDataService: AboutMeDataService){}
  data = this.aboutMeDataService

}
