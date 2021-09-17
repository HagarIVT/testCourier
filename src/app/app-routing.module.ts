import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './Component/footer/footer.component';
// import { DashboardComponent } from './Component/Company/dashboard/dashboard.component';
import { HomeComponent } from './Component/home/home.component';

// import { companyModule } from './Component/Company/company.module';


const routes: Routes = [
  // { path: 'dash', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'foot', component: FooterComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, //Default Path
 
  {
    path: 'Company',
    loadChildren: () => import('./Component/Company/company.module').then(m => m.companyModule)
  },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
