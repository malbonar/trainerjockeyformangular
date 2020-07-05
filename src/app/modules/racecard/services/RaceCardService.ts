import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { RaceMeeting } from '../../../shared/models/RaceMeeting';
import { RaceCardHorse } from '../../../shared/models/RaceCardHorse';
import { HorseRace } from '../../../shared/models/HorseRace';
import { ApiKeyTokenService } from '../../../shared/services/api-key-token.service';
import { tap, flatMap } from 'rxjs/operators';
import { HorsePreviousRun } from '../models/horse-previous-run';

@Injectable ({
    providedIn: 'root'
})
export class RaceCardService {
    fetchUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private apiKeyTokenService: ApiKeyTokenService) {}

    fetchRaceCardMeetings(): Observable<RaceMeeting[]> {
        return this.apiKeyTokenService.getAccessToken().pipe(
            tap(token => console.log('fetchRaceCardMeetings got token')),
            flatMap(token =>
                this.http.get<RaceMeeting[]>(`${this.fetchUrl}RaceMeeting`,
                {
                  headers: {'authorization': `Bearer ${token.access_token}` }
                })
            )
        );
    }

    fetchHorses(raceId: number): Observable<RaceCardHorse[]> {
        return this.apiKeyTokenService.getAccessToken().pipe(
            flatMap(token =>
                this.http.get<RaceCardHorse[]>(`${this.fetchUrl}RaceCard/${raceId}/horses`,
                {
                  headers: {'authorization': `Bearer ${token.access_token}` }
                })
            )
        );
    }

    fetchRaceCard(course: string, raceTime: string): Observable<HorseRace> {
        return this.apiKeyTokenService.getAccessToken().pipe(
            flatMap(token =>
                this.http.get<HorseRace>(`${this.fetchUrl}RaceCard?course=${course}&racetime=${raceTime}`,
                {
                  headers: {'authorization': `Bearer ${token.access_token}` }
                })
            )
        );
    }

    fetchHorseHistoryForRace(raceId: number): Observable<HorsePreviousRun[]> {
        return this.apiKeyTokenService.getAccessToken().pipe(
            flatMap(token =>
                this.http.get<HorsePreviousRun[]>(`${this.fetchUrl}RaceCard/GetPreviousRuns/${raceId}`,
                {
                  headers: {'authorization': `Bearer ${token.access_token}` }
                })
            )
        );
    }
}
