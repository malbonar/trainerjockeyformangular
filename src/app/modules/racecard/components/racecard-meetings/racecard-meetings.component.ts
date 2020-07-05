import { Component, OnInit } from '@angular/core';
import { RaceMeeting } from '../../../../shared/models/RaceMeeting';
import { RaceCardService } from '../../services/RaceCardService';
import { Router } from '@angular/router';
import { DateHelper } from '../../../../shared/models/DateHelper';
import { StateService } from '../../../../shared/services/state.service';
 
@Component({
    selector: 'app-racecard-meetings',
    templateUrl: './racecard-meetings.component.html',
    styleUrls: ['./racecard-meetings.component.css']
})
export class RaceCardMeetingsComponent implements OnInit {
    raceMeetings: RaceMeeting[] = [];
    loading = false;
    raceDate = '';

    constructor(
        private racecardService: RaceCardService,
        private router: Router,
        private stateService: StateService) {}

    ngOnInit() {
        this.loading = true;
        const races = this.stateService.getTodaysRaces();
        if (races === undefined || races.length === 0) {
        this.racecardService.fetchRaceCardMeetings()
            .toPromise()
            .then(raceMeetings => {
                this.raceMeetings = raceMeetings;
                const jsDate = new Date(this.raceMeetings[0].raceMeetingDate);
                this.raceDate = this.raceMeetings.length >= 0 ? new DateHelper().getDateString(jsDate) : '';
                this.stateService.setTodaysRaces(raceMeetings);
                this.loading = false;
            })
            .catch(err => {
                console.log(err);
                this.loading = false;
                this.router.navigate(['/error']);
            });
        } else {
            this.raceMeetings = races;
            this.loading = false;
            const jsDate = new Date(this.raceMeetings[0].raceMeetingDate);
            this.raceDate = this.raceMeetings.length >= 0 ? new DateHelper().getDateString(jsDate) : '';
        }
    }
}
