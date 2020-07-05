import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerjockeyreportComponent } from './modules/trainerjockeyreport/trainerjockeyreport.component';
import { AboutComponent } from './modules/about/about.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { RaceResultLoadStatusComponent } from './modules/admin/components/raceresultloadstatus/raceresultloadstatus.component';
import { LoginCallbackComponent } from './modules/admin/components/logincallback/logincallback.component';
import { AuthGuard } from './shared/guards/authguard';
import { HomeComponent } from './modules/home/home.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { RaceResultsComponent } from './modules/results/components/raceresults/raceresults.component';
import { RaceMeetingSummaryResultsComponent} from './modules/results/components/racemeetingsummaryresults/racemeetingsummaryresults.component';
import { RaceResultDetailComponent } from './modules/results/components/raceresultdetail/raceresultdetail.component';
import { ImportstatsComponent } from './modules/admin/components/importstats/importstats.component';
import { RaceCardMeetingsComponent } from './modules/racecard/components/racecard-meetings/racecard-meetings.component';
import { RaceCardComponent } from './modules/racecard/components/racecard/racecard.component';
import { RaceLoadStatusComponent } from './modules/admin/components/raceloadstatus/race-load-status.component';
import { HorseHistoryLoadStatusComponent } from './modules/admin/components/horse-history-load-status/horse-history-load-status.component';
import { HorsesForConditionsComponent } from './modules/betting-angles/horses-for-conditions/horses-for-conditions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trainerjockeyreport', component: TrainerjockeyreportComponent },
  { path: 'about', component: AboutComponent },
  { path: 'raceresultloadstatus', component: RaceResultLoadStatusComponent, canActivate: [AuthGuard] },
  { path: 'raceloadstatus', component: RaceLoadStatusComponent, canActivate: [AuthGuard] },
  { path: 'importstats', component: ImportstatsComponent, canActivate: [AuthGuard]},
  { path: 'logincallback', component: LoginCallbackComponent },
  { path: 'racecards', component: RaceCardMeetingsComponent },
  { path: 'racecard', component: RaceCardComponent },
  { path: 'horsehistoryloadstatus', component: HorseHistoryLoadStatusComponent },
  { path: 'raceresults', component: RaceResultsComponent },
  { path: 'raceresultmeetingsummary', component: RaceMeetingSummaryResultsComponent },
  { path: 'raceresultdetail', component: RaceResultDetailComponent },
  { path: 'horsesForConditions', component: HorsesForConditionsComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagenotfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
