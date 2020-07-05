import { Injectable } from '@angular/core';
import { RaceResultLoadStatus } from '../../modules/admin/components/raceresultloadstatus/models/RaceResultLoadStatus';
import { RaceMeeting } from '../../shared/models/RaceMeeting';
import { TrainerJockey } from '../../../app/modules/trainerjockeyreport/models/TrainerJockey';
import { HorseRace } from '../models/HorseRace';

@Injectable ({
    providedIn: 'root'
})
export class StateService {
    private state = {
        loadStatusDate: null,
        loadStatuses: [],
        raceResultSelectedDate: null,
        raceResultMeetings: [],
        trainerJockeys: [],
        raceMeetingSummaryResult: null,
        raceResultSummary: null,
        raceResultDetail: null,
        importStatDate: null,
        racecard: null,
        trainerJockeyFilter: null,
        todaysRaces: []
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

    getRaceResultSelectedDate() {
        return this.state.raceResultSelectedDate;
    }

    setRaceResultSelectedDate(raceResultDate) {
        this.state.raceResultSelectedDate = raceResultDate;
    }

    getRaceResultMeetings() {
        return this.state.raceResultMeetings;
    }

    setRaceResultMeetings(meetings: RaceMeeting[]) {
        this.state.raceResultMeetings = meetings;
    }

    getTrainerJockeys() {
        return this.state.trainerJockeys;
    }

    setTrainerJockeys(trainerJockeys: TrainerJockey[]) {
        this.state.trainerJockeys = trainerJockeys;
    }

    getRaceMeetingSummaryResult() {
        return this.state.raceMeetingSummaryResult;
    }

    setRaceMeetingSummaryResult(meetingResult: RaceMeeting) {
        this.state.raceMeetingSummaryResult = meetingResult;
    }

    setRaceResultDetail(raceResult: HorseRace) {
        this.state.raceResultDetail = raceResult;
    }

    getRaceResultDetail(): (HorseRace | null) {
        return this.state.raceResultDetail;
    }

    getImportStatDate() {
        return this.state.importStatDate;
    }

    setImportStatDate(date: Date) {
        this.state.importStatDate = date;
    }

    getRaceCard(): HorseRace {
        return this.state.racecard;
    }

    setRaceCard(raceCard: HorseRace): void {
        this.state.racecard = raceCard;
    }

    setTrainerJockeyFilter(filter: any) {
        this.state.trainerJockeyFilter = filter;
    }

    getTrainerJockeyFilter(): any {
        return this.state.trainerJockeyFilter;
    }

    getTodaysRaces(): RaceMeeting[] {
        return this.state.todaysRaces;
    }

    setTodaysRaces(races: RaceMeeting[]): void {
        this.state.todaysRaces = races;
    }
}
