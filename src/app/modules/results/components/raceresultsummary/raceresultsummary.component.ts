import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../../shared/services/state.service';
import { RaceResultService } from '../../services/RaceResultService';
import { HorseRace } from '../../../../shared/models/HorseRace';
import { RaceResultHorse } from '../../../../shared/models/RaceResultHorse';

@Component ({
    selector: 'app-raceresultsummary',
    templateUrl: 'raceresultsummary.component.html',
    styleUrls: ['raceresultsummary.component.css']
})
export class RaceResultSummaryComponent implements OnInit {
    @Input() race: HorseRace;
    winner: RaceResultHorse;
    second: RaceResultHorse;
    third: RaceResultHorse;
    fourth: RaceResultHorse;
    runners: number;
    showSecond: boolean;
    showThird: boolean;
    showFourth: boolean;
    loading: boolean;

    constructor(private state: StateService,
        private router: Router,
        private resultService: RaceResultService) {}

    ngOnInit() {
        this.loading = true;
        // fetch horses
        this.resultService.fetchHorsesForRace(this.race.raceId)
            .toPromise()
            .then(horses => {
                this.loading = false;
                this.race.horses = horses;
                if (this.race.horses !== undefined && this.race.horses.length > 0) {
                    this.winner = (this.race.horses as RaceResultHorse[]).find(horse => horse.position === 1);
                    this.second = (this.race.horses as RaceResultHorse[]).find(horse => horse.position === 2);
                    this.third = (this.race.horses as RaceResultHorse[]).find(horse => horse.position === 3);
                    this.fourth = (this.race.horses as RaceResultHorse[]).find(horse => horse.position === 4);
                    this.runners = this.race.horses.length;
                    this.showSecond = this.runners > 4;
                    this.showThird = this.runners > 7;
                    this.showFourth = this.runners > 15;
                }
                // add to state?
            })
            .catch(err => {
                this.loading = false;
                this.router.navigate(['/error']);
            });
    }

    showRaceResultDetail() {
        this.state.setRaceResultDetail(this.race);
        this.router.navigate(['/raceresultdetail']);
    }
}
