import { Component, OnInit } from '@angular/core';
import { HorsesForConditionsService } from './services/HorsesForConditionsService';
import { HorseForConditions } from './models/HorseForConditions';

@Component({
  selector: 'app-horses-for-conditions',
  templateUrl: './horses-for-conditions.component.html',
  styleUrls: ['./horses-for-conditions.component.css']
})
export class HorsesForConditionsComponent implements OnInit {
  horsesForConditions: HorseForConditions[] = [];
  raceDate = new Date();
  loading = false;

  constructor(private service: HorsesForConditionsService) { }

  ngOnInit() {
    this.fetchHorsesForConditions();
  }

  raceDateSelected() {
    this.fetchHorsesForConditions();
  }

  fetchHorsesForConditions(): void {
    this.service.fetchHorses(this.raceDate).subscribe(
      (horses) => {
        this.horsesForConditions = horses;
      }
    );
  }

  showResults(): boolean {
    return this.horsesForConditions.length > 0 && this.horsesForConditions.some((horse) => !isNaN(horse.position));
  }
}
