import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../../shared/services/state.service';
import { ImportStatsService } from './services/ImportStatsService';
import { HorseStat } from './models/HorseStat';

@Component({
  selector: 'app-importstats',
  templateUrl: './importstats.component.html',
  styleUrls: ['./importstats.component.css']
})
export class ImportstatsComponent implements OnInit {
  loading = false;
  importStatDate: Date;
  courses: string[] = [];
  raceTimes: string[] = [];
  selectedCourse = 'All';
  selectedRaceTime = 'All';
  horseStats: HorseStat[] = [];

  constructor(
    private state: StateService,
    private service: ImportStatsService,
    private router: Router) { }

  ngOnInit() {
    const date = this.state.getImportStatDate();
    if (date !== undefined) {
      this.importStatDate = date;
    }
  }

  importStatDateSelected() {
    this.loading = true;
    try {
      this.state.setImportStatDate(this.importStatDate);
      this.service.getCoursesForDate(this.importStatDate)
        .then(courses => {
          const courseNames: string[] = [];
          courses.forEach(c => {
            if (courseNames.findIndex(x => x === c.course) === -1) {
              courseNames.push(c.course);
            }
          });

          this.courses = courseNames.sort();
          this.courses.unshift('All');
          this.raceTimes = ['All'];
          this.horseStats = [];
        })
        .catch(_ => {
          this.courses = ['All'];
          this.raceTimes = ['All'];
          this.horseStats = [];
        });
    } finally {
      this.loading = false;
    }
  }

  onSelectedCourseChange(course) {
    this.raceTimes = this.service.getRaceTimesForCourse(this.importStatDate, course);
    this.raceTimes.unshift('All');
    this.selectedRaceTime = this.raceTimes[0];
    this.selectedCourse = course;
    this.horseStats = [];
  }

  onSelectedRaceTimeChange(racetime) {
    this.selectedRaceTime = racetime;
    this.service.getHorseStatsForRace(this.importStatDate, this.selectedCourse, this.selectedRaceTime)
      .then(horses => {
        this.horseStats = horses;
      })
      .catch(_ => {
        this.router.navigate(['/error']);
      });
  }

  // trigger import of stats for selected race or races
  import() {
    this.service.runStatsImport(this.importStatDate, this.selectedCourse, this.selectedRaceTime)
      .then(_ => {
        this.onSelectedRaceTimeChange(this.selectedRaceTime);
      })
      .catch(_ => {
        this.router.navigate(['/error']);
      });
  }
}
