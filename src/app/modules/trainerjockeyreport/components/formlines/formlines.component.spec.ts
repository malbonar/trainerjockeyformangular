import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlinesComponent } from './formlines.component';

describe('FormlinesComponent', () => {
  let component: FormlinesComponent;
  let fixture: ComponentFixture<FormlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
