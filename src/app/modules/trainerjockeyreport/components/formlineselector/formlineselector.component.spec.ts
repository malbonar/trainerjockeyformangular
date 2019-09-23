import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlineselectorComponent } from './formlineselector.component';

describe('FormlineselectorComponent', () => {
  let component: FormlineselectorComponent;
  let fixture: ComponentFixture<FormlineselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlineselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlineselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
