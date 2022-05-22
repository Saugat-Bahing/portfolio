import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CubeGameModule } from '../cube-game/cube-game.module';
import { ProjectsComponent } from './projects/projects.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    ProjectsComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    CubeGameModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class MainPageModule { }
