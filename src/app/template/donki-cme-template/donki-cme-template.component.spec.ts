import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonkiCmeTemplateComponent } from './donki-cme-template.component';

describe('DonkiCmeTemplateComponent', () => {
  let component: DonkiCmeTemplateComponent;
  let fixture: ComponentFixture<DonkiCmeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonkiCmeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonkiCmeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
