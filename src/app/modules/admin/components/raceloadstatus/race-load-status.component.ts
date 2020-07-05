import { Component, OnInit } from '@angular/core';

import { RaceLoadStatus } from './models/RaceLoadStatus';
import { RaceLoadStatusService } from './services/race-load-status-service';

@Component({
    selector: 'app-race-load-status',
    templateUrl: './race-load-status.component.html',
    styleUrls: ['./race-load-status.component.css']
})
export class RaceLoadStatusComponent implements OnInit{
    statuses: RaceLoadStatus[] = [];
    loading = false;
    selectedStatus: RaceLoadStatus = {
        raceLoadStatusId: 0,
        raceLinkUrl: '',
        isLoaded: false,
        errorReason: '',
        selected: false
    };

    constructor(private statusService: RaceLoadStatusService) { }

    ngOnInit() {
        this.loading = true;
        this.statusService.getRaceLoadStatuses().subscribe(
            statuses => {
                statuses.sort((a, b) => {
                    if (a.isLoaded === b.isLoaded) {
                        return (a.raceLinkUrl > b.raceLinkUrl) ? 1 : -1;
                    }
                    return (a.isLoaded > b.isLoaded) ? 1 : -1;
                });
                this.statuses = statuses;
                this.loading = false;
            },
            err => {
                this.statuses = [];
                this.loading = false;
            }
        );
    }

    statusSelected(idx: number): void {
        this.statuses.forEach((s) => s.selected = false);
        this.selectedStatus = this.statuses[idx];
    }

    showNoRaceResultsLoaded(): boolean {
        return !this.loading && this.statuses.length === 0;
    }

    disableReImport(): boolean {
        return !(this.selectedStatus.selected && !this.selectedStatus.isLoaded);
    }

    reloadStatus(): void {
        //
    }
}
