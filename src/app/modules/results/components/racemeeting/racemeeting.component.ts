import { Component, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../../shared/services/state.service';
import { RaceMeeting } from '../../../../shared/models/RaceMeeting';
import { RaceResultService } from '../../services/RaceResultService';

@Component ({
    selector: 'app-racemeeting',
    templateUrl: 'racemeeting.component.html',
    styleUrls: ['racemeeting.component.css']
})
export class RaceMeetingComponent {
    @Input() raceMeeting: RaceMeeting;

    constructor(private router: Router,
        private state: StateService,
        private resultService: RaceResultService) { }

    showResultsForMeeting() {
        this.state.setRaceMeetingSummaryResult(this.raceMeeting);
        this.router.navigate(['/raceresultmeetingsummary']);
    }

    showSingleRaceResult(race) {
        this.resultService.fetchHorsesForRace(race.raceId)
            .toPromise()
            .then(horses => {
                race.horses = horses;
                this.state.setRaceResultDetail(race);
                this.router.navigate(['/raceresultdetail']);
            });
    }
}
