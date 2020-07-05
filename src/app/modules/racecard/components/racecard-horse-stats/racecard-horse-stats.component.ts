import { Component, Input, OnInit } from '@angular/core';
import { HorsePreviousRun } from '../../models/horse-previous-run';
import { RaceCardHorse } from '../../../../shared/models/RaceCardHorse';

@Component({
    selector: 'app-racecard-horse-stats',
    templateUrl: './racecard-horse-stats.component.html',
    styleUrls: ['./racecard-horse-stats.component.css']
})
export class RacecardHorseStatsComponent implements OnInit {
    @Input() previousRuns: HorsePreviousRun[];
    @Input() going: string;
    @Input() class: number;
    @Input() distance: string;
    @Input() course: string;
    @Input() horse: RaceCardHorse;

    private _classForm = '(0-0-0)';
    private _goingForm = '(0-0-0)';
    private _distanceForm = '(0-0-0)';
    private _courseForm = '(0-0-0)';
    private _lastWinOR = '';

    ngOnInit() {
        if (this.previousRuns.length > 0) {
            if (this.class !== undefined) {
                const classWins = this.previousRuns.filter(r => r.position === 1 && r.raceClass === this.class).length;
                const classPlaced = this.previousRuns.filter(
                    r => r.placed !== undefined && r.placed === true && r.raceClass === this.class).length;
                const classRuns = this.previousRuns.filter(r => r.raceClass === this.class).length;
                this._classForm = `(${classRuns}-${classWins}-${classPlaced})`;
            }
            if (this.going !== undefined) {
                const goingWins = this.previousRuns.filter(r => r.going === this.going && r.position === 1).length;
                const goingPlaced = this.previousRuns
                    .filter(r => r.placed !== undefined && r.placed === true &&
                        r.going.toUpperCase() === this.going.toUpperCase()).length;
                const goingRuns = this.previousRuns.filter(r => r.going.toUpperCase() === this.going.toUpperCase()).length;
                this._goingForm = `(${goingRuns}-${goingWins}-${goingPlaced})`;
            }
            if (this.distance !== undefined) {
                const distWins = this.previousRuns
                    .filter(r => r.position === 1 && r.distance.toUpperCase() === this.distance.toUpperCase()).length;
                const distPlaced = this.previousRuns.filter(r => r.placed !== undefined && r.placed === true &&
                    r.distance.toUpperCase() === this.distance.toUpperCase()).length;
                const distRuns = this.previousRuns
                    .filter(r => r.distance.toUpperCase() === this.distance.toUpperCase()).length;
                this._distanceForm = `(${distRuns}-${distWins}-${distPlaced})`;
            }
            if (this.course !== undefined) {
                const courseWins = this.previousRuns
                    .filter(r => r.position === 1 && r.course.toUpperCase() === this.course.toUpperCase()).length;
                const coursePlaced = this.previousRuns.filter(r => r.placed !== undefined && r.placed === true &&
                    r.course.toUpperCase() === this.course.toUpperCase()).length;
                const courseRuns = this.previousRuns.filter(r => r.course.toUpperCase() === this.course.toUpperCase()).length;
                this._courseForm = `(${courseRuns}-${courseWins}-${coursePlaced})`;
            }
            const wins = this.previousRuns.filter(r => r.position === 1)
                .sort((a, b) => {
                    if (a.raceDate > b.raceDate) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
            if (wins.length > 0) {
                if (this.horse !== undefined) {
                    const diff = this.horse.officialRating === wins[0].officialRating ? '' :
                        this.horse.officialRating - wins[0].officialRating;
                    this._lastWinOR = `${wins[0].officialRating} ${diff > 0 ? '+' : ''}${diff}`;
                } else {
                    this._lastWinOR = String(wins[0].officialRating);
                }
            }
        }
    }

    get classForm(): string {
        return this._classForm;
    }

    get goingForm(): string {
        return this._goingForm;
    }

    get distanceForm(): string {
        return this._distanceForm;
    }

    get courseForm(): string {
        return this._courseForm;
    }

    get lastWinOR(): string {
        return this._lastWinOR.length > 0 ? `(${this._lastWinOR})` : '()';
    }
}
