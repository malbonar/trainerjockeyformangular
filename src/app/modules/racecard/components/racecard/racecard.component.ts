import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../../shared/services/state.service';
import { HorseRace } from '../../../../shared/models/HorseRace';
import { HorsePreviousRun } from '../../models/horse-previous-run';
import { RaceCardService } from '../../services/RaceCardService';

class HorseFormDisplay {
    constructor(horseName: string, display: boolean, displayStats = false, runs: HorsePreviousRun[] = []) {
        this.horseName = horseName;
        this.display = display;
        this.previousRuns = runs;
    }
    horseName: string;
    display: boolean;
    displayStats: boolean;
    previousRuns: HorsePreviousRun[];
}

@Component({
    selector: 'app-racecard',
    templateUrl: './racecard.component.html',
    styleUrls: ['./racecard.component.css']
})
export class RaceCardComponent implements OnInit {
    private horseFormDisplay: HorseFormDisplay[] = [];
    race: HorseRace;

    constructor(
        private state: StateService,
        private raceCardService: RaceCardService) {}

    ngOnInit() {
        this.race = this.state.getRaceCard();
        this.loadPreviousRuns();
    }

    private loadPreviousRuns(): void {
        this.raceCardService.fetchHorseHistoryForRace(this.race.raceCardId).subscribe(
            (races) => {
                races = races.sort((a: HorsePreviousRun, b: HorsePreviousRun) => {
                    if (a.horseName === b.horseName) {
                        if (a.raceDate > b.raceDate) {
                            return -1;
                        } else {
                            return 1;
                        }
                    } else {
                        if (a.horseName < b.horseName) {
                            return -1;
                        } else {
                            return 1;
                        }
                    }
                });
                races.forEach((r: HorsePreviousRun) => {
                    const idx = this.horseFormDisplay.findIndex(h => h.horseName === r.horseName);
                    if (idx === -1) {
                        this.horseFormDisplay.push(new HorseFormDisplay(r.horseName, false, false, [r]));
                    } else {
                        this.horseFormDisplay[idx].previousRuns.push(r);
                    }
                });
            },
            (err) => {
                console.log(err);
            }
        );
    }

    /**
     * user has clicked ui element that shows or hides the horse's previous runs
     * @param horseName identifier of selected horse
     */
    showHorseHistory(horseName: string): void {
        const idx = this.horseFormDisplay.findIndex(h => h.horseName === horseName);
        if (idx === -1) {
            // first time so set to display for this horse
            this.horseFormDisplay.push(new HorseFormDisplay(horseName, true));
        } else {
            this.horseFormDisplay[idx].display = !this.horseFormDisplay[idx].display;
        }
    }

    /**
     * True is horse's previous runs should be displayed
     * @param horseName identifier of selected horse
     */
    displayHorseHistory(horseName: string): boolean {
        const idx = this.horseFormDisplay.findIndex(h => h.horseName === horseName);
        if (idx === -1) {
            return false;
        } else {
            return this.horseFormDisplay[idx].display;
        }
    }

    /**
     * supplies previous runs of selected horse to horse history and stats views
     * @param horseName identifier of selected horse
     */
    previousRuns(horseName: string): HorsePreviousRun[] {
        const idx = this.horseFormDisplay.findIndex(h => h.horseName === horseName);
        if (idx === -1) {
            return [];
        } else {
            return this.horseFormDisplay[idx].previousRuns;
        }
    }

    /**
     * returns the boolean setting which indicates to show or hide horsae stats for selected horse
     */
    displayHorseStats(horseName: string): boolean {
        const idx = this.horseFormDisplay.findIndex(h => h.horseName === horseName);
        if (idx === -1) {
            return false;
        } else {
            return this.horseFormDisplay[idx].displayStats;
        }
    }

    /**
     * user has clicked ui element that shows or hides the horse statistics
     */
    showHorseStats(horseName: string): void {
        const idx = this.horseFormDisplay.findIndex(h => h.horseName === horseName);
        if (idx === -1) {
            // first time so set to display for this horse
            this.horseFormDisplay.push(new HorseFormDisplay(horseName, false, true));
        } else {
            this.horseFormDisplay[idx].displayStats = !this.horseFormDisplay[idx].displayStats;
        }
    }
}
