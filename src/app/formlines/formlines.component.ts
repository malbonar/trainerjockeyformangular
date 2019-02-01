import { Component, OnInit, Input } from "@angular/core";

import { TrainerJockey } from "../../Models/TrainerJockey";
import { TrainerJockeyService } from "../../TrainerJockeyDataService/TrainerJockeyService";
import { pureFunction1 } from "@angular/core/src/render3";

@Component({
  selector: "app-formlines",
  templateUrl: "./formlines.component.html",
  styleUrls: ["./formlines.component.css"]
})
export class FormlinesComponent implements OnInit {
  orgFormLines: TrainerJockey[]; // need from initial data load
  formLines: TrainerJockey[]; // data bound to this
  loading: Boolean = false;

  constructor(private service: TrainerJockeyService) {}

  ngOnInit() {
    this.loading = true;
    this.service.getTrainerJockeyForm().subscribe(formlines => {
      this.formLines = formlines;
      this.orgFormLines = formlines;
      this.loading = false;
    });
  }

  filterForm = filter => {
    console.log("filterForm invoked in formlines component");
    console.log(filter);

    if (filter !== undefined) {
      let newFormLines = this.orgFormLines;

      if (!isNaN(filter.runs) && filter.runs !== "" && filter.runs > 0)
        newFormLines = newFormLines.filter(
          formline => formline.Runs >= filter.runs
        );

      if (!isNaN(filter.wins) && filter.wins !== "" && filter.wins > 0)
        newFormLines = newFormLines.filter(
          formline => formline.Wins >= filter.wins
        );

      if (!isNaN(filter.placed) && filter.placed !== "" && filter.placed > 0)
        newFormLines = newFormLines.filter(
          formline => formline.Placed >= filter.placed
        );

      if (
        !isNaN(filter.winPercent) &&
        filter.winPercent !== "" &&
        filter.winPercent > 0
      )
        newFormLines = newFormLines.filter(
          formline => formline.WinPercent >= filter.winPercent
        );

      if (
        !isNaN(filter.placedPercent) &&
        filter.placedPercent !== "" &&
        filter.placedPercent > 0
      )
        newFormLines = newFormLines.filter(
          formline => formline.PlacedPercent >= filter.placedPercent
        );

      if (
        !isNaN(filter.winProfitLoss) &&
        filter.winProfitLoss !== "" &&
        filter.winProfitLoss > -1000
      )
        newFormLines = newFormLines.filter(
          formline => formline.WinProfitLoss >= filter.winProfitLoss
        );

      if (
        !isNaN(filter.placedProfitLoss) &&
        filter.placedProfitLoss !== "" &&
        filter.placedProfitLoss > -1000
      )
        newFormLines = newFormLines.filter(
          formline => formline.PlacedProfitLoss >= filter.placedProfitLoss
        );

      if (!isNaN(filter.AE) && filter.AE !== "" && filter.AE > 0)
        newFormLines = newFormLines.filter(
          formline => formline.AE >= filter.AE
        );

      if (!isNaN(filter.IV) && filter.IV !== "" && filter.IV > 0) {
        newFormLines = newFormLines.filter(
          formline => formline.IV >= filter.IV
        );
      }

      this.formLines = newFormLines;
    }
  };

  reset = () => {
    this.formLines = this.orgFormLines;
  };
}
