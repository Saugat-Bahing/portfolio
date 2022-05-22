import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubeComponent } from './cube/cube.component';
import { GameComponent } from './game/game.component';



@NgModule({
  declarations: [
    CubeComponent,
    GameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameComponent
  ]
})
export class CubeGameModule { }
