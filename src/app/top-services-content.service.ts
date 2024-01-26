import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopServicesContentService {

  constructor() { }

  featuredContents = [
    
    {
      title: 'Site Layouts',
      subtitle: "DESIGN",
      image: '../../assets/images/top-services-images/first-image.png',
    },
    {
      title: 'Interior Design',
      subtitle: "DESIGN",
      image: '../../assets/images/top-services-images/second-image.png',
    },
    {
      title: '3D Rendering',
      subtitle: "DESIGN",
      image: '../../assets/images/top-services-images/third-image.png',
    },
    {
      title: 'Permit Expediting',
      subtitle: "PERMITTING",
      image: '../../assets/images/top-services-images/forth-image.png',
    },
    {
      title: 'Construction Docs',
      subtitle: "DOCUMENTATION",
      image: '../../assets/images/top-services-images/fifth-image.png',
    },
    {
      title: 'Site Investigations',
      subtitle: "DUE DILIGENCE",
      image: '../../assets/images/top-services-images/sixth-image.png',
    },
    // Add more features as needed
  ];


}
