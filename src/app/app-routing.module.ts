import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerjockeyreportComponent } from './trainerjockeyreport/trainerjockeyreport.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'trainerjockeyreport', component: TrainerjockeyreportComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/trainerjockeyreport', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
