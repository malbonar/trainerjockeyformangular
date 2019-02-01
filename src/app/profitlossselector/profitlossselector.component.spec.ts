import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitlossselectorComponent } from './profitlossselector.component';

describe('ProfitlossselectorComponent', () => {
  let component: ProfitlossselectorComponent;
  let fixture: ComponentFixture<ProfitlossselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitlossselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitlossselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
