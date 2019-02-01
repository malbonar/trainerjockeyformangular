import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvselectorComponent } from './ivselector.component';

describe('IvselectorComponent', () => {
  let component: IvselectorComponent;
  let fixture: ComponentFixture<IvselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
