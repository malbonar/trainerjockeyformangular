import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../../shared/services/state.service';
import { RaceResultLoadStatusService } from './services/raceresultloadstatusservice';
import { RaceResultLoadStatus } from './models/RaceResultLoadStatus';

@Component ({
    selector: 'app-raceresultloadstatus',
    templateUrl: './raceresultloadstatus.component.html',
    styleUrls: ['./raceresultloadstatus.component.css']
})
export class RaceResultLoadStatusComponent implements OnInit {
    loadStatusDate: Date;
    statuses: RaceResultLoadStatus[] = [];
    loading: Boolean = false;
    selectedRowId = 0;

    constructor(private state: StateService,
        private statusService: RaceResultLoadStatusService,
        private router: Router) {}

    ngOnInit() {
        if (this.state.getLoadStatusDate() !== null) {
            this.loadStatusDate = this.state.getLoadStatusDate();
        }

        const statuses = this.state.getLoadStatuses();
        if (statuses !== null && statuses !== undefined) {
            this.statuses = statuses;
        }
    }

    loadStatusDateSelected() {
        this.loading = true;
        this.state.setLoadStatusDate(this.loadStatusDate);
        this.statusService.getRaceResultLoadStatuses(this.loadStatusDate)
            .toPromise()
            .then(data => {
                this.loading = false;
                data.sort((a, b) => {
                    if (a.isLoaded === b.isLoaded) {
                        return (a.resultLinkUrl > b.resultLinkUrl) ? 1 : -1;
                    }
                    return (a.isLoaded > b.isLoaded) ? 1 : -1;
                });
                this.state.setLoadStatuses(data);
                this.statuses = data;
            })
            .catch(err => {
                this.loading = false;
                this.router.navigate(['/error']);
            });
    }

    showNoRaceResultsLoaded() {
        return this.loading === false && this.statuses.length === 0 && this.loadStatusDate !== undefined;
    }

    statusSelected(rowId) {
        this.statuses[this.selectedRowId].selected = false;
        this.selectedRowId = rowId;
        this.statuses[this.selectedRowId].selected = true;
    }
}
