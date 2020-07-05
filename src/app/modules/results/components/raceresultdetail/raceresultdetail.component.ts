import { Component, OnInit} from '@angular/core';
import { HorseRace } from '../../../../shared/models/HorseRace';
import { StateService } from '../../../../shared/services/state.service';
import { RaceResultHorse } from '../../../../shared/models/RaceResultHorse';

@Component ({
    selector: 'app-raceresultdetail',
    templateUrl: 'raceresultdetail.component.html',
    styleUrls: ['raceresultdetail.component.css']
})
export class RaceResultDetailComponent implements OnInit {
    race: HorseRace;

    constructor(private state: StateService) {}

    ngOnInit() {
        this.race = this.state.getRaceResultDetail();
        (this.race.horses as RaceResultHorse[]).sort((h1, h2) => {
            if (h1.position < h2.position) {
                return 0;
            }
            return 1;
        });
    }
}
