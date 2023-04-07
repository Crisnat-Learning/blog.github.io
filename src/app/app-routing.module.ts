import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDescriptionComponent } from './blog-description/blog-description.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
  { path: 'detailed', component: BlogDescriptionComponent },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'support',
    component: SupportComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
