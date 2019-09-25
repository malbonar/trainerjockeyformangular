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
    selectedRowId = -1;
    selectedStatus: RaceResultLoadStatus = {
        raceResultLoadStatusId: 0,
        raceDate: null,
        resultLinkUrl: '',
        isLoaded: true,
        errorReason: '',
        selected: false
    };

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
        this.setSelectedItemToEmpty();
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
        if (this.selectedRowId !== rowId) {
            if (this.selectedRowId >= 0) { // initilized to -1 so ignore if first time selected
                this.statuses[this.selectedRowId].selected = false;
            }
            this.selectedRowId = rowId;
            this.statuses[this.selectedRowId].selected = true;
            this.selectedStatus = this.statuses[this.selectedRowId];
        } else {
            this.setSelectedItemToEmpty();
            this.selectedRowId = 0;
        }
    }

    reloadStatus() {
        if (this.selectedStatus.raceResultLoadStatusId !== 0) {
            this.handleServiceResponse(
                this.statusService.reloadRaceResult(this.loadStatusDate, this.selectedStatus.resultLinkUrl,
                    this.selectedStatus.raceResultLoadStatusId));
        }
    }

    deleteStatus() {
        if (this.selectedStatus.raceResultLoadStatusId !== 0) {
            this.handleServiceResponse(
                this.statusService.deleteRaceResultStatus(this.selectedStatus.raceResultLoadStatusId));
        }
    }

    // both reload and delete have same behavior to service response so put in common method
    private handleServiceResponse(response: Promise<object>) {
        response
        .then(_ => {
            this.statuses.splice(this.selectedRowId, 1);
            this.setSelectedItemToEmpty();
            this.selectedRowId = -1; // otherwise buttons don't disable correctly as this is still old value
        })
        .catch(err => {
            if (err.status === 404) {
                this.router.navigate(['/pagenotfound']);
            } else {
                this.router.navigate(['/error']);
            }
        });
    }

    private setSelectedItemToEmpty() {
        this.selectedStatus = {
            raceResultLoadStatusId: 0,
            raceDate: null,
            resultLinkUrl: '',
            isLoaded: true,
            errorReason: '',
            selected: false
        };
    }
}
