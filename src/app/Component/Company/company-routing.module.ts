import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '/', component: DashboardComponent },
  { path: 'das', component: DashboardComponent },

  { path: '', redirectTo: 'das', pathMatch: 'full' }, //Default Path


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class companyRoutingModule { }
