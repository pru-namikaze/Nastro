import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeowsBrowseTemplateComponent } from './neows-browse-template.component';

describe('NeowsBrowseTemplateComponent', () => {
  let component: NeowsBrowseTemplateComponent;
  let fixture: ComponentFixture<NeowsBrowseTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeowsBrowseTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeowsBrowseTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
