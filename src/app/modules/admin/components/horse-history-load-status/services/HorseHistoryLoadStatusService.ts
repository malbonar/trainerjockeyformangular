import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { HorseHistoryLoadStatus } from './../../../../admin/components/horse-history-load-status/models/HorseHistoryLoadStatus';

@Injectable ({
    providedIn: 'root'
})
export class HorseHistoryLoadStatusService {

    private fetchUrl = environment.raceLoadStatusUrl + 'FetchHorseHistoryLoadStatus';
    private runBaseUrl = environment.raceLoadStatusUrl + 'TriggerHorseHistoryImport';

    constructor(private http: HttpClient) { }

    getHorseHistoryLoadStatuses(): Observable<HorseHistoryLoadStatus[]> {
        return this.http.get<HorseHistoryLoadStatus[]>(this.fetchUrl);
    }

    runHorseHistoryImport(raceId: number): Observable<any> {
        return this.http.post(`${this.runBaseUrl}/${raceId}`, '', {
               headers: { 'MBSoftwareSolutions': environment.horseImportTriggerKey }
            });
    }
}
