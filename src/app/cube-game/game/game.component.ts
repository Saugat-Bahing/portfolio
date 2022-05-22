import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  cubesList:string[][] = [];
  score:number = 0;
  
  constructor(private gameService:GameService) {}

  ngOnInit(): void {
    this.gameService.cubeList.subscribe((list) => {
      this.cubesList = list;
    });
    this.createFirstCubeSet();
  }

  generateCube() {

    let position =  this.gameService.getRandomPosition();
    this.cubesList.push(position);
  }

  createFirstCubeSet() {

    for (let count=0; count<6; count++) {

      setTimeout(() => {
        this.generateCube();
        this.gameService.cubeList.next(this.cubesList);
      },1500*count);
    }
  }

  killCube(index:number) {

    this.score++;
    this.cubesList.splice(index, 1);
    this.generateCube();
  }
  }

