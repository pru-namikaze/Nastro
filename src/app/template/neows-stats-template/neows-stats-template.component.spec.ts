import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeowsStatsTemplateComponent } from './neows-stats-template.component';

describe('NeowsStatsTemplateComponent', () => {
  let component: NeowsStatsTemplateComponent;
  let fixture: ComponentFixture<NeowsStatsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeowsStatsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeowsStatsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
