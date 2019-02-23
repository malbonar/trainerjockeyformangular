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

@Component({
  selector: 'app-formlineselector',
  templateUrl: './formlineselector.component.html',
  styleUrls: ['./formlineselector.component.css']
})
export class FormlineselectorComponent implements OnInit, AfterViewInit {
  @Output() onUpdateCallback: EventEmitter<any> = new EventEmitter<any>();
  @Output() onResetCallback: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('runs') runSelector: SelectorComponent;
  @ViewChild('wins') winsSelector: SelectorComponent;
  @ViewChild('placed') placedSelector: SelectorComponent;
  @ViewChild('winpct') winpctSelector: PercentselectorComponent;
  @ViewChild('placedpct') placedpctSelector: PercentselectorComponent;
  @ViewChild('winpl') winplSelector: ProfitlossselectorComponent;
  @ViewChild('placedpl') placedplSelector: ProfitlossselectorComponent;
  @ViewChild('iv') ivSelector: IvselectorComponent;
  @ViewChild('ae') aeSelector: IvselectorComponent;

  filter = {
    runs: '',
    wins: '',
    placed: '',
    winPercent: '',
    placedPercent: '',
    winProfitLoss: '',
    placedProfitLoss: '',
    AE: '',
    IV: ''
  };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.runSelector.value = '';
    this.winsSelector.value = '';
    this.placedSelector.value = '';
    this.winpctSelector.value = '';
    this.placedpctSelector.value = '';
    this.winplSelector.value = '';
    this.placedplSelector.value = '';
    this.ivSelector.value = '';
    this.aeSelector.value = '';
  }

  onChanged(e) {
    const { source, value } = e;

    switch (source) {
      case 'Runs':
        this.filter.runs = value;
        break;
      case 'Wins':
        this.filter.wins = value;
        break;
      case 'Placed':
        this.filter.placed = value;
        break;
      case 'Win%':
        this.filter.winPercent = value;
        break;
      case 'Placed%':
        this.filter.placedPercent = value;
        break;
      case 'Win PL':
        this.filter.winProfitLoss = value;
        break;
      case 'Placed PL':
        this.filter.placedProfitLoss = value;
        break;
      case 'AE':
        this.filter.AE = value;
        break;
      case 'IV':
        this.filter.IV = value;
        break;
      default:
        break;
    }
  }

  updateClick() {
    this.onUpdateCallback.emit(this.filter);
  }

  resetClick = () => {
    this.onResetCallback.emit();
    this.ngAfterViewInit();
  };
}
