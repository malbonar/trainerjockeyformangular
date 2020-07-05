import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../../shared/services/state.service';
import { RaceMeeting } from '../../../../shared/models/RaceMeeting';
import { RaceResultService } from '../../services/RaceResultService';

@Component ({
    selector: 'app-raceresults',
    templateUrl: './raceresults.component.html',
    styleUrls: ['./raceresults.component.css']
})
export class RaceResultsComponent implements OnInit {
    raceResultSelectedDate: Date;
    loading = false;
    raceMeetings: RaceMeeting[] = [];

    constructor(private state: StateService,
        private resultService: RaceResultService,
        private router: Router) {}

    ngOnInit() {
        const date = this.state.getRaceResultSelectedDate();
        if (date != null) {
            this.raceResultSelectedDate = date;
        }

        const meetings = this.state.getRaceResultMeetings();
        if (meetings.length > 0) {
            this.raceMeetings = meetings;
        }
    }

    showNoRaceResultsLoaded() {
        return this.loading === false && this.raceMeetings.length === 0 && this.raceResultSelectedDate !== undefined;
    }

    raceResultDateSelected() {
        this.loading = true;
        this.state.setRaceResultSelectedDate(this.raceResultSelectedDate);
        this.resultService.fetchRaceMeetings(this.raceResultSelectedDate)
            .toPromise()
            .then(meetings => {
                this.loading = false;
                this.raceMeetings = meetings;
                this.state.setRaceResultMeetings(meetings);
            })
            .catch(err => {
                this.loading = false;
                this.router.navigate(['/error']);
            });
    }
}
