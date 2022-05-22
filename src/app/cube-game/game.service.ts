import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cubeList = new Subject<string[][]>();
  constructor() { }

  getRandomPosition() {

    let left = Math.floor(Math.random()*60 + 15).toString()+"vw";
    let top = Math.floor(Math.random()*65+20).toString()+"%";
    return [left, top]
  }
}
