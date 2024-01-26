import { Component } from '@angular/core';
import { TopServicesContentService } from '../top-services-content.service';

@Component({
  selector: 'app-top-services',
  templateUrl: './top-services.component.html',
  styleUrls: ['./top-services.component.css']
})
export class TopServicesComponent {

  constructor(public topServicesContent:TopServicesContentService){}

  getData() {
    return this.topServicesContent.featuredContents
  }

}
