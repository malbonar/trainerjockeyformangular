import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { SelectorComponent } from '../selector/selector.component';
import { PercentselectorComponent } from '../percentselector/percentselector.component';
import { ProfitlossselectorComponent } from '../profitlossselector/profitlossselector.component';
import { IvselectorComponent } from '../ivselector/ivselector.component';
import { PeriodselectorComponent } from '../periodselector/periodselector.component';

@Component({
  selector: 'app-formlineselector',
  templateUrl: './formlineselector.component.html',
  styleUrls: ['./formlineselector.component.css']
})
export class FormlineselectorComponent implements OnInit, AfterViewInit {
  @Output() onUpdateCallback: EventEmitter<any> = new EventEmitter<any>();
  @Output() onResetCallback: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPeriodChangedCallback: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('runs') runSelector: SelectorComponent;
  @ViewChild('wins') winsSelector: SelectorComponent;
  @ViewChild('placed') placedSelector: SelectorComponent;
  @ViewChild('winpct') winpctSelector: PercentselectorComponent;
  @ViewChild('placedpct') placedpctSelector: PercentselectorComponent;
  @ViewChild('winpl') winplSelector: ProfitlossselectorComponent;
  @ViewChild('placedpl') placedplSelector: ProfitlossselectorComponent;
  @ViewChild('iv') ivSelector: IvselectorComponent;
  @ViewChild('ae') aeSelector: IvselectorComponent;
  @ViewChild('period') periodSelector: PeriodselectorComponent;

  filter = {
    runs: '',
    wins: '',
    placed: '',
    winPercent: '',
    placedPercent: '',
    winProfitLoss: '',
    placedProfitLoss: '',
    AE: '',
    IV: '',
    days: '14'
  };

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
        this.runSelector.value = '';
        this.winsSelector.value = '';
        this.placedSelector.value = '';
        this.winpctSelector.value = '';
        this.placedpctSelector.value = '';
        this.winplSelector.value = '';
        this.placedplSelector.value = '';
        this.ivSelector.value = '';
        this.aeSelector.value = '';
        // this assignment was causing the 'Expression has changed after it was checked' error,
        // which is resolved with the setTimeout and waiting another turn
        this.periodSelector.value = this.filter.days.toString();
    });
  }

  onChanged(e) {
    const { source, value } = e;

    switch (source) {
      case 'Runs':
        this.filter.runs = value;
        this.onUpdateCallback.emit(this.filter);
        break;
      case 'Wins':
        this.filter.wins = value;
        this.onUpdateCallback.emit(this.filter);
        break;
      case 'Placed':
        this.filter.placed = value;
        this.onUpdateCallback.emit(this.filter);
        break;
      case 'Win%':
        this.filter.winPercent = value;
        this.onUpdateCallback.emit(this.filter);
        break;
      case 'Placed%':
        this.filter.placedPercent = value;
        this.onUpdateCallback.emit(this.filter);
        break;
      case 'Win PL':
        this.filter.winProfitLoss = value;
        this.onUpdateCallback.emit(this.filter);
        break;
      case 'Placed PL':
        this.filter.placedProfitLoss = value;
        this.onUpdateCallback.emit(this.filter);
        break;
      case 'AE':
        this.filter.AE = value;
        this.onUpdateCallback.emit(this.filter);
        break;
      case 'IV':
        this.filter.IV = value;
        this.onUpdateCallback.emit(this.filter);
        break;
      case 'Period':
        this.filter.days = value;
        this.onPeriodChangedCallback.emit(this.filter); // update as soon as this is changed
        this.ngAfterViewInit();
        break;
      default:
        break;
    }
  }

  // updateClick() {
  //   this.onUpdateCallback.emit(this.filter);
  // }

  resetClick = () => {
    this.onResetCallback.emit();
    this.ngAfterViewInit();
  }
}
