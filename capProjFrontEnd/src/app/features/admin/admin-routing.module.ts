import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MovieFormComponent } from './pages/movie-form/movie-form.component';
import { OurmoviesComponent } from './pages/ourmovies/ourmovies.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';

const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    { path: "addmovie", component: MovieFormComponent },
    { path: "ourmovies", component: OurmoviesComponent },
    { path: "schedules", component: SchedulesComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
