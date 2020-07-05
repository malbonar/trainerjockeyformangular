import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HorseForConditions } from '../models/HorseForConditions';
import { DateHelper } from '../../../../shared/models/DateHelper';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HorsesForConditionsService {
    private fetchUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    fetchHorses(raceDate: Date): Observable<HorseForConditions[]> {
        const dateString = new DateHelper().getDateString(raceDate);
        return this.http.get<HorseForConditions[]>(`${this.fetchUrl}HorsesForConditions?raceDate=${dateString}`);
    }
}