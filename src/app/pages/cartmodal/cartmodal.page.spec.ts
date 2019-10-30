import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartmodalPage } from './cartmodal.page';

describe('CartmodalPage', () => {
  let component: CartmodalPage;
  let fixture: ComponentFixture<CartmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
