import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemModal } from './item-modal.page';

describe('ItemModal', () => {
  let component: ItemModal;
  let fixture: ComponentFixture<ItemModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemModal],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
