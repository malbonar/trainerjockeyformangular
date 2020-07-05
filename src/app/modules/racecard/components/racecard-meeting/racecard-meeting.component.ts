import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../../shared/services/state.service';
import { RaceMeeting } from '../../../../shared/models/RaceMeeting';
import { RaceCardService } from '../../services/RaceCardService';
import { HorseRace } from '../../../../shared/models/HorseRace';

@Component({
    selector: 'app-racecard-meeting',
    templateUrl: './racecard-meeting.component.html',
    styleUrls: ['./racecard-meeting.component.css']
})
export class RaceCardMeetingComponent {
    @Input() raceMeeting: RaceMeeting;

    constructor(private router: Router,
        private state: StateService,
        private racecardService: RaceCardService) { }

    showRacesForMeeting() {
        // this.state.setRaceMeetingSummaryResult(this.raceMeeting);
        // this.router.navigate(['/raceresultmeetingsummary']);
    }

    showRaceCard(race: HorseRace): void {
        this.racecardService.fetchHorses(race.raceCardId)
            .toPromise()
            .then(horses => {
                race.horses = horses.sort((a, b) =>
                    a.decimalOdds > b.decimalOdds ? 1 : -1);

                 this.state.setRaceCard(race);
                 this.router.navigate(['/racecard']);
             })
             .catch(err => {
                 console.log('ShowRaceCard() error');
                 console.log(err);
             });
    }
}