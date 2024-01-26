import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopServicesComponent } from './top-services.component';

describe('TopServicesComponent', () => {
  let component: TopServicesComponent;
  let fixture: ComponentFixture<TopServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopServicesComponent]
    });
    fixture = TestBed.createComponent(TopServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
