import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { RaceCardService } from './modules/racecard/services/RaceCardService';
import { StateService } from './shared/services/state.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Winning Stat\'s';

  constructor(private auth: AuthService,
    private racecardService: RaceCardService,
    private stateService: StateService) {}

  ngOnInit() {
    // On initial load, check authentication state with authorization server
    // Set up local auth streams if user is already authenticated
    this.auth.localAuthSetup();

    // preload data to wake up Azure functions and reduce fetch time for common page
    this.racecardService.fetchRaceCardMeetings().pipe(
      shareReplay(1)
    ).subscribe((races) => {
      this.stateService.setTodaysRaces(races);
    });
  }
}
