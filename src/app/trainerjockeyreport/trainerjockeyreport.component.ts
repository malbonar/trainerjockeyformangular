import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { FormlinesComponent } from "../formlines/formlines.component";

@Component({
  selector: "app-trainerjockeyreport",
  templateUrl: "./trainerjockeyreport.component.html",
  styleUrls: ["./trainerjockeyreport.component.css"]
})
export class TrainerjockeyreportComponent implements OnInit, AfterViewInit {
  @ViewChild(FormlinesComponent) child: FormlinesComponent;
  filter: any;
  isReset: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (!this.isReset) this.child.filterForm(this.filter);
    else this.child.reset();
  }

  onUpdate = selection => {
    this.filter = selection;
    this.ngAfterViewInit();
  };

  onReset = () => {
    this.isReset = true;
    this.ngAfterViewInit();
    this.isReset = false;
  };
}
