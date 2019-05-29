import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeowsTemplateComponent } from './neows-template.component';

describe('NeowsTemplateComponent', () => {
  let component: NeowsTemplateComponent;
  let fixture: ComponentFixture<NeowsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeowsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeowsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
