import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-percentselector',
  templateUrl: './percentselector.component.html',
  styleUrls: ['./percentselector.component.css']
})
export class PercentselectorComponent implements OnInit {
  @Input() title: string;
  @Input() value: string;
  @Output() onChangeCallback: EventEmitter<any> = new EventEmitter();

  constructor() {}

  changed = e => {
    this.value = e;
    this.onChangeCallback.emit({ source: this.title, value: this.value });
  };

  ngOnInit() {}
}
