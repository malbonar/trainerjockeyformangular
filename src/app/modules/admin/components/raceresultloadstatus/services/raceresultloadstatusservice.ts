import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';
import { RaceResultLoadStatus } from '../models/RaceResultLoadStatus';

@Injectable ({
    providedIn: 'root'
})
export class RaceResultLoadStatusService {
    fetchUrl = environment.raceResultLoadStatusUrl + 'FetchRaceResultLoadStatus';
    reloadUrl = environment.raceResultServiceUrl + 'ImportFailedDelayedRaceResult';
    deleteUrl = environment.raceResultLoadStatusUrl + 'DeleteRaceResultLoadStatus';
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    constructor(private http: HttpClient, private router: Router) { }

    getRaceResultLoadStatuses(raceDate: Date) {
        const dateString = `${raceDate.getDate().toString().padStart(2, '0')}` +
            `-${(this.months[raceDate.getMonth()]).toString().padStart(2, '0')}` +
            `-${raceDate.getFullYear().toString()}`;
        return this.http.get<RaceResultLoadStatus[]>(`${this.fetchUrl}?racedate=${dateString}`);
    }

    reloadRaceResult(raceDate: Date, raceUrl: string, loadId: number): Promise<object> {
        const dateString = `${raceDate.getDate().toString().padStart(2, '0')}` +
            `-${(this.months[raceDate.getMonth()]).toString().padStart(2, '0')}` +
            `-${raceDate.getFullYear().toString()}`;
        return this.http.get(`${this.reloadUrl}/${loadId}?racedate=${dateString}&race=${raceUrl}`)
            .toPromise();
    }

    deleteRaceResultStatus(loadId: number): Promise<object> {
        return this.http.delete(`${this.deleteUrl}/${loadId}`).toPromise();
    }
}
