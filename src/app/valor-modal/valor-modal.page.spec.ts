import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorModalPage } from './valor-modal.page';

describe('ValorModalPage', () => {
  let component: ValorModalPage;
  let fixture: ComponentFixture<ValorModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValorModalPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
