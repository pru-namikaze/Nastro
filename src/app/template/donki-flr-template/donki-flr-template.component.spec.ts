import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonkiFlrTemplateComponent } from './donki-flr-template.component';

describe('DonkiFlrTemplateComponent', () => {
  let component: DonkiFlrTemplateComponent;
  let fixture: ComponentFixture<DonkiFlrTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonkiFlrTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonkiFlrTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
