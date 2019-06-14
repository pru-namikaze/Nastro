import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeowsBrowseByAsteroidIdTemplateComponent } from './neows-browse-by-asteroid-id-template.component';

describe('NeowsBrowseByAsteroidIdTemplateComponent', () => {
  let component: NeowsBrowseByAsteroidIdTemplateComponent;
  let fixture: ComponentFixture<NeowsBrowseByAsteroidIdTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeowsBrowseByAsteroidIdTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeowsBrowseByAsteroidIdTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
