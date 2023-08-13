import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionScrollService {
  
  scroll = new BehaviorSubject<Sections>(Sections.Skills);
  currentScroll = this.scroll.asObservable();

  constructor() { }

  setSection(section:Sections) {
    this.scroll.next(section);
  }
}

export enum Sections {
    Home,
    About,
    Skills,
    Projects
}
