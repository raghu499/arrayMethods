import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayExamplesComponent } from './array-examples.component';

describe('ArrayExamplesComponent', () => {
  let component: ArrayExamplesComponent;
  let fixture: ComponentFixture<ArrayExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
