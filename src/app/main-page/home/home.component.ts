import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SectionScrollService, Sections } from 'src/app/services/section-scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  menu = ['Home', 'About', 'Skills', 'Projects', 'Contacts'];
  subtitle = '';
  doneTyping = false;
  @ViewChild('home', {static: true}) private homeRef!:ElementRef;

  constructor(private sectionScrollService:SectionScrollService) { }

  ngOnInit(): void {
    this.typewriter("I am a software developer");

      this.sectionScrollService.currentScroll.subscribe((scroll) =>{
          if (scroll == Sections.Home){
            this.comeToView();
          }
      });
  }

  
  comeToView() {
    const y = this.homeRef.nativeElement.offsetTop;
    window.scrollTo({ top: y, behavior: 'smooth'});
  }
  typewriter(caption: string) {
    let i = 0;
    const interval = setInterval(() => {
      this.subtitle += caption[i];

      if (this.subtitle == caption) {
        clearInterval(interval);
        setTimeout(()=> {
          this.doneTyping = true;
        }, 150)
      }
      i++;
    }, 130);
  }
}
