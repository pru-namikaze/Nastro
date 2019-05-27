import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodTemplateComponent } from './apod-template.component';

describe('ApodTemplateComponent', () => {
  let component: ApodTemplateComponent;
  let fixture: ComponentFixture<ApodTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApodTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
