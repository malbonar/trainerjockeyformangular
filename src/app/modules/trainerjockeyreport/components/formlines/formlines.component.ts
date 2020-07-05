
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerJockey } from '../../models/TrainerJockey';
import { TrainerJockeyService } from '../../services/TrainerJockeyService';
import { StateService } from '../../../../shared/services/state.service';
import { TrainerJockeyHorse } from '../../models/TrainerJockeyHorse';
import { RaceCardService } from '../../../../modules/racecard/services/RaceCardService';

@Component({
  selector: 'app-formlines',
  templateUrl: './formlines.component.html',
  styleUrls: ['./formlines.component.css']
})
export class FormlinesComponent implements OnInit {
  orgFormLines: TrainerJockey[]; // need from initial data load
  formLines: TrainerJockey[]; // data bound to this
  loading: Boolean = false;
  periodDays = 14;
  filter: any;

  constructor(
    private service: TrainerJockeyService,
    private raceCardService: RaceCardService,
    private router: Router,
    private state: StateService) {}

  ngOnInit() {
    const trainerJockeys = this.state.getTrainerJockeys();
    if (trainerJockeys.length === 0) {
      this.load();
    } else {
      this.formLines = trainerJockeys;
      this.orgFormLines = trainerJockeys;
      this.loading = false;
    }
    this.filterForm(this.state.getTrainerJockeyFilter());
  }

  private runFilter = filter => {
    let newFormLines = this.orgFormLines;
    if (filter.days !== undefined) {
      this.periodDays = filter.days;
    }

    if (!isNaN(filter.runs) && filter.runs !== '' && filter.runs > 0) {
      newFormLines = newFormLines.filter(formline => formline.runs >= filter.runs);
    }

    if (!isNaN(filter.wins) && filter.wins !== '' && filter.wins > 0) {
      newFormLines = newFormLines.filter(formline => formline.wins >= filter.wins);
    }

    if (!isNaN(filter.placed) && filter.placed !== '' && filter.placed > 0) {
      newFormLines = newFormLines.filter(formline => formline.placed >= filter.placed);
    }

    if (!isNaN(filter.winPercent) && filter.winPercent !== '' && filter.winPercent > 0) {
      newFormLines = newFormLines.filter(formline => formline.winPercent >= filter.winPercent);
    }

    if (!isNaN(filter.placedPercent) && filter.placedPercent !== '' && filter.placedPercent > 0) {
      newFormLines = newFormLines.filter(formline => formline.placedPercent >= filter.placedPercent);
    }

    if (!isNaN(filter.winProfitLoss) && filter.winProfitLoss !== '' && filter.winProfitLoss > -1000) {
      newFormLines = newFormLines.filter(formline => formline.winProfitLoss >= filter.winProfitLoss);
    }

    if (
      !isNaN(filter.placedProfitLoss) && filter.placedProfitLoss !== '' && filter.placedProfitLoss > -1000) {
      newFormLines = newFormLines.filter(formline => formline.placedProfitLoss >= filter.placedProfitLoss);
    }

    if (!isNaN(filter.AE) && filter.AE !== '' && filter.AE > 0) {
      newFormLines = newFormLines.filter(formline => formline.ae >= filter.AE);
    }

    if (!isNaN(filter.IV) && filter.IV !== '' && filter.IV > 0) {
      newFormLines = newFormLines.filter(formline => formline.iv >= filter.IV);
    }

    this.formLines = newFormLines;
  }

  private load(attempts = 0) {
    if (attempts <= 1) {
      this.loading = true;
      this.service.getTrainerJockeyForm(this.periodDays)
        .then(res => {
          this.loading = false;
          const data: TrainerJockey[] = JSON.parse(JSON.stringify(res));
          this.formLines = data;
          this.orgFormLines = data;
          this.state.setTrainerJockeys(data);
        })
        .catch(_ => {
            console.warn('Failed to fetch trainer jockey stats probably due to invalid token, so re-attempting');
        });
    } else {
      this.loading = false;
      this.router.navigate(['/error']);
    }
  }

  filterForm = filter => {
    this.filter = filter;
    if (filter !== undefined) {
        this.runFilter(filter);
    }
  }

  reset = () => {
    this.formLines = this.orgFormLines;
  }

  periodChanged = filter => {
    this.periodDays = filter.days;
    this.load();
  }

  showRaceCard(horse: TrainerJockeyHorse): void {
    // store filter first
    this.state.setTrainerJockeyFilter(this.filter);

    this.raceCardService.fetchRaceCard(horse.course, horse.raceTime)
      .subscribe(
        (race) => {
          race.horses = race.horses.sort((a, b) => a.decimalOdds > b.decimalOdds ? 1 : -1);
          this.state.setRaceCard(race);
          this.router.navigate(['/racecard']);
        },
        (err) => {

        }
      );
  }
}
