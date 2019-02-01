import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.css"]
})
export class SelectorComponent implements OnInit {
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
