import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerjockeyreportComponent } from './trainerjockeyreport.component';

describe('TrainerjockeyreportComponent', () => {
  let component: TrainerjockeyreportComponent;
  let fixture: ComponentFixture<TrainerjockeyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerjockeyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerjockeyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
