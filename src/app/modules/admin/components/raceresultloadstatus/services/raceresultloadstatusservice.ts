import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';
import { RaceResultLoadStatus } from '../models/RaceResultLoadStatus';
import { DateHelper } from '../../../../../shared/models/DateHelper';

@Injectable ({
    providedIn: 'root'
})
export class RaceResultLoadStatusService {
    fetchUrl = environment.raceResultLoadStatusUrl + 'FetchRaceResultLoadStatus';
    reloadUrl = environment.raceResultImportServiceUrl + 'ImportFailedDelayedRaceResult';
    deleteUrl = environment.raceResultLoadStatusUrl + 'DeleteRaceResultLoadStatus';
    dateHelper = new DateHelper();

    constructor(private http: HttpClient, private router: Router) { }

    getRaceResultLoadStatuses(raceDate: Date) {
        const dateString = this.dateHelper.getDateString(raceDate);
        return this.http.get<RaceResultLoadStatus[]>(`${this.fetchUrl}?racedate=${dateString}`);
    }

    reloadRaceResult(raceDate: Date, raceUrl: string, loadId: number): Promise<object> {
        const dateString = this.dateHelper.getDateString(raceDate);
        return this.http.get(`${this.reloadUrl}/${loadId}?racedate=${dateString}&race=${raceUrl}`)
            .toPromise();
    }

    deleteRaceResultStatus(loadId: number): Promise<object> {
        return this.http.delete(`${this.deleteUrl}/${loadId}`).toPromise();
    }
}
