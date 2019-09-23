import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentselectorComponent } from './percentselector.component';

describe('PercentselectorComponent', () => {
  let component: PercentselectorComponent;
  let fixture: ComponentFixture<PercentselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
