import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonkiGstTemplateComponent } from './donki-gst-template.component';

describe('DonkiGstTemplateComponent', () => {
  let component: DonkiGstTemplateComponent;
  let fixture: ComponentFixture<DonkiGstTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonkiGstTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonkiGstTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
