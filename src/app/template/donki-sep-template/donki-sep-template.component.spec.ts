import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonkiSepTemplateComponent } from './donki-sep-template.component';

describe('DonkiSepTemplateComponent', () => {
  let component: DonkiSepTemplateComponent;
  let fixture: ComponentFixture<DonkiSepTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonkiSepTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonkiSepTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
