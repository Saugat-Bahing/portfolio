import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './main-page/landing-page/landing-page.component';
import { ProjectsComponent } from './main-page/projects/projects.component';

const routes: Routes = [ 
  {path:'', component:LandingPageComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
