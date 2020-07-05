import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlinesComponent } from './modules/trainerjockeyreport/components/formlines/formlines.component';
import { SelectorComponent } from './modules/trainerjockeyreport/components/selector/selector.component';
import { ProfitlossselectorComponent } from './modules/trainerjockeyreport/components/profitlossselector/profitlossselector.component';
import { PercentselectorComponent } from './modules/trainerjockeyreport/components/percentselector/percentselector.component';
import { IvselectorComponent } from './modules/trainerjockeyreport/components/ivselector/ivselector.component';
import { FormlineselectorComponent } from './modules/trainerjockeyreport/components/formlineselector/formlineselector.component';
import { TrainerjockeyreportComponent } from './modules/trainerjockeyreport/trainerjockeyreport.component';
import { AboutComponent } from './modules/about/about.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { PeriodselectorComponent } from './modules/trainerjockeyreport/components/periodselector/periodselector.component';
import { LoginCallbackComponent } from './modules/admin/components/logincallback/logincallback.component';
import { NavBarComponent } from './shared/components/navbar/navbar.component';
import { RaceResultLoadStatusComponent } from './modules/admin/components/raceresultloadstatus/raceresultloadstatus.component';
import { HomeComponent } from './modules/home/home.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { RaceResultsComponent } from './modules/results/components/raceresults/raceresults.component';
import { RaceMeetingSummaryResultsComponent } from './modules/results/components/racemeetingsummaryresults/racemeetingsummaryresults.component';
import { RaceResultSummaryComponent } from './modules/results/components/raceresultsummary/raceresultsummary.component';
import { RaceResultDetailComponent } from './modules/results/components/raceresultdetail/raceresultdetail.component';
import { RaceMeetingComponent } from './modules/results/components/racemeeting/racemeeting.component';
import { ImportstatsComponent } from './modules/admin/components/importstats/importstats.component';
import { RaceCardMeetingsComponent } from './modules/racecard/components/racecard-meetings/racecard-meetings.component';
import { RaceCardMeetingComponent } from './modules/racecard/components/racecard-meeting/racecard-meeting.component';
import { RaceCardComponent } from './modules/racecard/components/racecard/racecard.component';
import { RaceLoadStatusComponent } from './modules/admin/components/raceloadstatus/race-load-status.component';
import { HorseHistoryLoadStatusComponent } from './modules/admin/components/horse-history-load-status/horse-history-load-status.component';
import { RacecardHorseStatsComponent } from './modules/racecard/components/racecard-horse-stats/racecard-horse-stats.component';
import { RacecardHorseHistoryComponent } from './modules/racecard/components/racecard-horse-history/racecard-horse-history.component';
import { HorsesForConditionsComponent } from './modules/betting-angles/horses-for-conditions/horses-for-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    FormlinesComponent,
    SelectorComponent,
    ProfitlossselectorComponent,
    PercentselectorComponent,
    IvselectorComponent,
    FormlineselectorComponent,
    TrainerjockeyreportComponent,
    AboutComponent,
    PagenotfoundComponent,
    PeriodselectorComponent,
    RaceResultLoadStatusComponent,
    LoginCallbackComponent,
    NavBarComponent,
    HomeComponent,
    ErrorComponent,
    RaceResultsComponent,
    RaceMeetingSummaryResultsComponent,
    RaceResultSummaryComponent,
    RaceResultDetailComponent,
    RaceMeetingComponent,
    ImportstatsComponent,
    RaceCardMeetingsComponent,
    RaceCardMeetingComponent,
    RaceCardComponent,
    RaceLoadStatusComponent,
    HorseHistoryLoadStatusComponent,
    RacecardHorseStatsComponent,
    RacecardHorseHistoryComponent,
    HorsesForConditionsComponent,
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    DropdownModule,
    CalendarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
