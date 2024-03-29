import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AboutMeDataService {
  constructor() {}

  aboutMeData = {
    goodAt: [
      'Architecture',
      'Interior Design',
      'Building Design',
      '3D Rendering',
      'Supervision',
      'Sustainable design',
    ],
    bigDescription:
      'I specialize as a design and full-service architect for new residences, home additions, and commercial buildings. I also provide additional services like obtaining permits, due diligence, and architectural supervision. If you like what I do, contact me to discuss our new great project!',
  };
}
