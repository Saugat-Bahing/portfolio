import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css'],
})
export class CubeComponent implements OnInit {
  cubeList!: string[][];
  @Input() cubeIndex!:number;
  @Output() killedCubeIndex = new EventEmitter<number>();
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.cubeList.subscribe((list) => {
      this.cubeList = list;
    });
  }

  kill() {
    this.killedCubeIndex.emit(this.cubeIndex);
  }

  createCube() {
      let cube = this.gameService.getRandomPosition();
      this.cubeList.push(cube);
      this.gameService.cubeList.next(this.cubeList);
}
}
