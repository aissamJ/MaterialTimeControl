import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTimeControlComponent } from './material-time-control.component';

describe('MaterialTimeControlComponent', () => {
  let component: MaterialTimeControlComponent;
  let fixture: ComponentFixture<MaterialTimeControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTimeControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTimeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
