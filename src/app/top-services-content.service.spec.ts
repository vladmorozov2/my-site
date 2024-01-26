import { TestBed } from '@angular/core/testing';

import { TopServicesContentService } from './top-services-content.service';

describe('TopServicesContentService', () => {
  let service: TopServicesContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopServicesContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
