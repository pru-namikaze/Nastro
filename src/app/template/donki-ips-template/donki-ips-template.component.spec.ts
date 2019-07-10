import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonkiIpsTemplateComponent } from './donki-ips-template.component';

describe('DonkiIpsTemplateComponent', () => {
  let component: DonkiIpsTemplateComponent;
  let fixture: ComponentFixture<DonkiIpsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonkiIpsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonkiIpsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
