import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-periodselector',
  templateUrl: './periodselector.component.html',
  styleUrls: ['./periodselector.component.css']
})
export class PeriodselectorComponent implements OnInit {
  @Input() title: string;
  @Input() value: string;
  @Output() onChangeCallback: EventEmitter<any> = new EventEmitter();

  constructor() { }

  changed = e => {
    this.value = e;
    this.onChangeCallback.emit({ source: this.title, value: this.value });
  }

  ngOnInit() {}
}
