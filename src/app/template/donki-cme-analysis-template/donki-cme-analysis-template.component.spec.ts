import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonkiCmeAnalysisTemplateComponent } from './donki-cme-analysis-template.component';

describe('DonkiCmeAnalysisTemplateComponent', () => {
  let component: DonkiCmeAnalysisTemplateComponent;
  let fixture: ComponentFixture<DonkiCmeAnalysisTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonkiCmeAnalysisTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonkiCmeAnalysisTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
