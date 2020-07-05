import { Component, Input, OnInit } from '@angular/core';
import { HorsePreviousRun } from '../../models/horse-previous-run';

@Component ({
    selector: 'app-racecard-horse-history',
    templateUrl: 'racecard-horse-history.component.html',
    styleUrls: ['racecard-horse-history.component.css']
})
export class RacecardHorseHistoryComponent implements OnInit {
    @Input() previousRuns: HorsePreviousRun[];

    courses: string[] = [];
    goings: string[] = [];
    private previousRunsOrg: HorsePreviousRun[];
    selectedCourseFilter: string;
    selectedGoingFilter: string;
    selectedMinClassFilter = 0;
    selectedMaxClassFilter = 1;

    ngOnInit() {
        this.previousRunsOrg = this.previousRuns;
        this.previousRuns.map(r => {
            if (this.courses.indexOf(r.course) === -1) {
                this.courses.push(r.course);
            }
            if (this.goings.indexOf(r.going.toUpperCase()) === -1) {
                this.goings.push(r.going.toUpperCase());
            }
        });
        this.courses.sort();
        this.courses.unshift('All');
        this.selectedCourseFilter = 'All';
        this.goings.sort();
        this.goings.unshift('All');
        this.selectedGoingFilter = 'All';
    }

    filter(): void {
        this.previousRuns = this.previousRunsOrg;
        if (this.selectedCourseFilter !== 'All') {
            this.previousRuns = this.previousRunsOrg.filter(r => r.course === this.selectedCourseFilter);
        }

        if (this.selectedGoingFilter !== 'All') {
            this.previousRuns = this.previousRuns
                .filter(r => r.going.toUpperCase() === this.selectedGoingFilter.toUpperCase());
        }

        if (this.selectedMinClassFilter !== 0) {
            this.previousRuns = this.previousRuns.filter(r => r.raceClass <= this.selectedMinClassFilter);
        }

        if (this.selectedMaxClassFilter !== 1) {
            this.previousRuns = this.previousRuns.filter(r => r.raceClass >= this.selectedMaxClassFilter);
        }
    }

    courseFilterChanged(course: string) {
        this.selectedCourseFilter = course;
        this.filter();
    }

    goingFilterChanged(going: string) {
        this.selectedGoingFilter = going;
        this.filter();
    }

    minClassFilterChanged(minClass: number) {
        this.selectedMinClassFilter = minClass;
        this.filter();
    }

    maxClassFilterChanged(maxClass: number) {
        this.selectedMaxClassFilter = maxClass;
        this.filter();
    }
}
