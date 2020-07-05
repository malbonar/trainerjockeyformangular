import { Component, Input, OnInit } from '@angular/core';
import { RaceMeeting } from '../../../../shared/models/RaceMeeting';
import { StateService } from '../../../../shared/services/state.service';

@Component({
    selector: 'app-racemeetingsummaryresults',
    templateUrl: 'racemeetingsummaryresults.component.html',
    styleUrls: ['racemeetingsummaryresults.component.css']
})
export class RaceMeetingSummaryResultsComponent implements OnInit {
    raceMeeting: RaceMeeting;

    constructor(private state: StateService) {}

    ngOnInit() {
        this.raceMeeting = this.state.getRaceMeetingSummaryResult();
    }
}
