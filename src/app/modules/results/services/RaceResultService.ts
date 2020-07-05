import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { RaceMeeting } from '../../../shared/models/RaceMeeting';
import { DateHelper } from '../../../shared/models/DateHelper';
import { RaceResultHorse } from '../../../shared/models/RaceResultHorse';
 
@Injectable ({
    providedIn: 'root'
})
export class RaceResultService {
    fetchUrl = environment.raceResultServiceUrl;

    constructor(private http: HttpClient) {}

    fetchRaceMeetings(raceDate: Date): Observable<RaceMeeting[]> {
        const dateHelper = new DateHelper;

        return this.http.get<RaceMeeting[]>(`${this.fetchUrl}GetRaceMeetings/${dateHelper.getDateString(raceDate)}`);
    }

    fetchHorsesForRace(raceId: number): Observable<RaceResultHorse[]> {
        return this.http.get<RaceResultHorse[]>(`${this.fetchUrl}GetHorsesForRaceResult/${raceId}`);
    }
}
