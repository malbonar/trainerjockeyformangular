import { Injectable } from '@angular/core';
import { RaceResultLoadStatus } from '../../modules/admin/components/raceresultloadstatus/models/RaceResultLoadStatus';

@Injectable ({
    providedIn: 'root'
})
export class StateService {
    state = {
        loadStatusDate: null,
        loadStatuses: RaceResultLoadStatus[0]
    };

    setLoadStatusDate(loadStatusDate: Date) {
        this.state.loadStatusDate = loadStatusDate;
    }

    getLoadStatusDate() {
        return this.state.loadStatusDate;
    }

    setLoadStatuses(statuses: RaceResultLoadStatus[]) {
        this.state.loadStatuses = statuses;
    }

    getLoadStatuses() {
        return this.state.loadStatuses;
    }
}
