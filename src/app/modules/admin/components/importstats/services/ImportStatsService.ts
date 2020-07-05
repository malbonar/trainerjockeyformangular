import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { ImportStatRace } from '../models/ImportStatRace';
import { DateHelper } from '../../../../../shared/models/DateHelper';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { HorseStat } from '../models/HorseStat';
import { map } from 'rxjs/operators';

@Injectable ({
    providedIn: 'root'
})
export class ImportStatsService {
    private fetchedRaces: ImportStatRace[] = [];
    private fetchUrl = `${environment.raceResultImportServiceUrl}/GetImportStatRaces/`;

    constructor(
        private http: HttpClient,
        private router: Router) { }

    getCoursesForDate(raceDate: Date) {
        const dateHelper = new DateHelper;
        const datestr = dateHelper.getDateString(raceDate);
        // do we have any courses for this date?
        if (this.fetchedRaces.find(r => r.raceDate === raceDate) === undefined) {
            const getCoursesObserver = this.http.get<ImportStatRace[]>(`${this.fetchUrl}${datestr}`);

            getCoursesObserver.subscribe(
                next => {
                    this.fetchedRaces.push(...next);
                }
            );

            return getCoursesObserver.toPromise();

        } else {
            const courses: ImportStatRace[] = [];
            this.fetchedRaces.forEach(m => {
                if (m.raceDate === raceDate && courses.findIndex(x => x.course === m.course) === -1) {
                    const race = new ImportStatRace();
                    race.course = m.course;
                    courses.push(race);
                }
            });
            return of<ImportStatRace[]>(courses.sort()).toPromise();
        }
    }

    getRaceTimesForCourse(raceDate: Date, course: string): string[] {
        const dateHelper = new DateHelper;
        const datestr = dateHelper.getDateString(raceDate);
        const raceTimes: string[] = [];

        this.fetchedRaces.forEach(r => {
            const fetchedRaceDate = dateHelper.getDateString(new Date(r.raceDate));

            if (fetchedRaceDate === datestr &&
                r.course === course &&
                raceTimes.findIndex(x => x === r.raceTime) === -1)
            {
                raceTimes.push(r.raceTime);
            }
        });
        return raceTimes.sort();
    }

    getHorseStatsForRace(raceDate: Date, course: string, raceTime: string): Promise<HorseStat[]> {
        const dateHelper = new DateHelper;
        const datestr = dateHelper.getDateString(raceDate);

        const races = this.fetchedRaces.filter(r => {
            const rDate = dateHelper.getDateString(new Date(r.raceDate));
            return rDate === datestr && r.course === course && r.raceTime === raceTime;
        });

        if (races.length === 0) {
            return of([]).toPromise();
        }

        return this.http.get<HorseStat[]>(
            `${environment.raceResultImportServiceUrl}GetHorseStatsForRace/${races[0].raceId}`)
            .toPromise();
    }

    runStatsImport(raceDate: Date, course: string, raceTime: string) {
        const dateHelper = new DateHelper;
        const datestr = dateHelper.getDateString(raceDate);
        let races: ImportStatRace[] = [];

        // if a single race
        if (course !== 'All' && raceTime !== 'All') {
            races = this.fetchedRaces.filter(r => {
                const rDate = dateHelper.getDateString(new Date(r.raceDate));
                return rDate === datestr && r.course === course && r.raceTime === raceTime;
            });
        } else {
            if (course !== 'All' && raceTime === 'All') {
                // load all races for a specific course
                races = this.fetchedRaces.filter(r => {
                    const rDate = dateHelper.getDateString(new Date(r.raceDate));
                    return rDate === datestr && r.course === course;
                });
            } else {
                // course = All, so all races for the selected date
                races = this.fetchedRaces.filter(r => {
                    const rDate = dateHelper.getDateString(new Date(r.raceDate));
                    return rDate === datestr;
                });
            }
        }

        if (races.length === 0) {
            return Promise.reject('no races found');
        }

        const raceIds: number[] = races.map(race => race.raceId);

        return this.http.post(`${environment.raceResultImportServiceUrl}TriggerStatsUpdate`, raceIds)
            .toPromise();
    }
}
