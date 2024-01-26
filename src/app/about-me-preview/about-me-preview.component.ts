import { Component } from '@angular/core';
import { AboutMeDataService } from '../about-me-data.service';

@Component({
  selector: 'app-about-me-preview',
  templateUrl: './about-me-preview.component.html',
  styleUrls: ['./about-me-preview.component.css'],
})
export class AboutMePreviewComponent {
  constructor(public aboutMeDataService: AboutMeDataService) {}

  data = this.aboutMeDataService
}

