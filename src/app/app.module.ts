import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlinesComponent } from './formlines/formlines.component';
import { SelectorComponent } from './selector/selector.component';
import { ProfitlossselectorComponent } from './profitlossselector/profitlossselector.component';
import { PercentselectorComponent } from './percentselector/percentselector.component';
import { IvselectorComponent } from './ivselector/ivselector.component';
import { FormlineselectorComponent } from './formlineselector/formlineselector.component';
import { TrainerjockeyreportComponent } from './trainerjockeyreport/trainerjockeyreport.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PeriodselectorComponent } from './periodselector/periodselector.component';

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
    PeriodselectorComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,
    BrowserAnimationsModule, MultiSelectModule, DropdownModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
