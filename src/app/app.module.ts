import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    ErrorComponent
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
