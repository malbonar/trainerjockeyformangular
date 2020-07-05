import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../../environments/environment';
import { RaceLoadStatus } from '../models/RaceLoadStatus';

@Injectable({
    providedIn: 'root'
})
export class RaceLoadStatusService {
    private fetchUrl = environment.raceLoadStatusUrl + 'FetchRaceLoadStatus';

    constructor(private http: HttpClient) { }

    getRaceLoadStatuses(): Observable<RaceLoadStatus[]> {
        return this.http.get<RaceLoadStatus[]>(this.fetchUrl);
    }
}
