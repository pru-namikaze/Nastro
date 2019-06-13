import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeowsNeoSentryTemplateComponent } from './neows-neo-sentry-template.component';

describe('NeowsNeoSentryTemplateComponent', () => {
  let component: NeowsNeoSentryTemplateComponent;
  let fixture: ComponentFixture<NeowsNeoSentryTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeowsNeoSentryTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeowsNeoSentryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
