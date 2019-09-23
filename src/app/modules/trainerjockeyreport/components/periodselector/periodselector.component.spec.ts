import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodselectorComponent } from './periodselector.component';

describe('PeriodselectorComponent', () => {
  let component: PeriodselectorComponent;
  let fixture: ComponentFixture<PeriodselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
