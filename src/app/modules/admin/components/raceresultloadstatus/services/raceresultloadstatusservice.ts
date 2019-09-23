import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { RaceResultLoadStatus } from '../models/RaceResultLoadStatus';

@Injectable ({
    providedIn: 'root'
})
export class RaceResultLoadStatusService {
    fetchUrl = environment.raceResultLoadStatusUrl + 'FetchRaceResultLoadStatus';
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    constructor(private http: HttpClient) { }

    getRaceResultLoadStatuses(raceDate: Date) {
        const dateString = `${raceDate.getDate().toString().padStart(2, '0')}` +
            `-${(this.months[raceDate.getMonth()]).toString().padStart(2, '0')}` +
            `-${raceDate.getFullYear().toString()}`;

        return this.http.get<RaceResultLoadStatus[]>(`${this.fetchUrl}?racedate=${dateString}`);
    }
}
