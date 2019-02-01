import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-profitlossselector",
  templateUrl: "./profitlossselector.component.html",
  styleUrls: ["./profitlossselector.component.css"]
})
export class ProfitlossselectorComponent implements OnInit {
  @Input() title: string;
  value: string = "";
  @Output() onChangeCallback: EventEmitter<any> = new EventEmitter();

  constructor() {}

  changed = e => {
    this.value = e;
    this.onChangeCallback.emit({ source: this.title, value: this.value });
  };

  ngOnInit() {}
}
