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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trainerjockeyreport', component: TrainerjockeyreportComponent },
  { path: 'about', component: AboutComponent },
  { path: 'raceresultloadstatus', component: RaceResultLoadStatusComponent, canActivate: [AuthGuard] },
  { path: 'logincallback', component: LoginCallbackComponent },
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
