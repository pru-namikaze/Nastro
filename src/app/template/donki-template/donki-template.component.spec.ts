import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonkiTemplateComponent } from './donki-template.component';

describe('DonkiTemplateComponent', () => {
  let component: DonkiTemplateComponent;
  let fixture: ComponentFixture<DonkiTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonkiTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonkiTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
