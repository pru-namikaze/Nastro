import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeowsFeedTemplateComponent } from './neows-feed-template.component';

describe('NeowsFeedTemplateComponent', () => {
  let component: NeowsFeedTemplateComponent;
  let fixture: ComponentFixture<NeowsFeedTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeowsFeedTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeowsFeedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
