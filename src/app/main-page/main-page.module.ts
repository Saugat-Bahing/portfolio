import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CubeGameModule } from '../cube-game/cube-game.module';
import { ProjectsComponent } from './projects/projects.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    ProjectsComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    CubeGameModule,
    AppRoutingModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class MainPageModule { }
