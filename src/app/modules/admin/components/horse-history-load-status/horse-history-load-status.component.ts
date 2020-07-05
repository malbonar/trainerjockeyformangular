import { Component, OnInit } from '@angular/core';
import { HorseHistoryLoadStatus } from './models/HorseHistoryLoadStatus';
import { HorseHistoryLoadStatusService } from './services/HorseHistoryLoadStatusService';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-horse-history-load-status',
    templateUrl: './horse-history-load-status.component.html',
    styleUrls: ['./horse-history-load-status.component.css']
})
export class HorseHistoryLoadStatusComponent implements OnInit {

    statuses: HorseHistoryLoadStatus[] = [];
    loading = false;

    constructor(private service: HorseHistoryLoadStatusService) { }

    private loadHorseHistoryLoadStatuses(): void {
        this.service.getHorseHistoryLoadStatuses()
            .subscribe(
                statuses => {
                    this.statuses = statuses.sort((a, b) => {
                        if ((a.errorReason !== undefined && a.errorReason !== null && a.errorReason !== '') &&
                            (b.errorReason === undefined || b.errorReason === null || b.errorReason === '')) {
                            return -1;
                        } else {
                            if ((b.errorReason !== undefined && b.errorReason !== null && b.errorReason !== '') &&
                                (a.errorReason === undefined || a.errorReason === null || a.errorReason === '')) {
                                return 1;
                            }
                        }
                        if (a.raceId >= b.raceId) {
                            return 1;
                        } else {
                            return -1;
                        }
                    });
                    this.loading = false;
                },
                err => {
                    this.statuses = [];
                    this.loading = false;
                }
            );
    }

    ngOnInit() {
        this.loading = true;
        this.loadHorseHistoryLoadStatuses();
    }

    showNoHorseHistoryLoaded(): boolean {
        return false;
    }

    reload(): void {
        this.statuses.filter(f => f.selected).forEach(s => {
            s.selected = false;
            this.service.runHorseHistoryImport(s.raceId).subscribe(
               _ => this.loadHorseHistoryLoadStatuses()
            );
        });
    }

    isAnySelected(): boolean {
        return this.statuses.some(s => s.selected);
    }

    isLoaded(error: undefined | null | string): boolean {
        return error === undefined || error === null || error === '';
    }
}
