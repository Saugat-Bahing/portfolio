import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  SectionScrollService,
  Sections,
} from 'src/app/services/section-scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('about', { static: true }) private aboutRef!: ElementRef;
  @ViewChild('image', { static: true }) private imageRef!: ElementRef;
  animationMatrix: any = [];
  rotateX = '0deg';
  rotateY = '0deg';
  constructor(private sectionScrollService: SectionScrollService) {}

  ngOnInit(): void {
    console.log(this.animationMatrix);
    this.sectionScrollService.currentScroll.subscribe((scroll) => {
      if (scroll == Sections.About) {
        this.comeToView();
      }
    });
  }

  ngAfterViewInit(): void {
    console.log(this.imageRef.nativeElement.offsetLeft)
  }

  handelHover(event: any) {
    if (screen.width < 600){
      return;
    }
    const THRESHOLD = 10;
    console.log(event);
    const { clientX, clientY, currentTarget } = event;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (offsetTop - clientY) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    console.log(horizontal, vertical);
    currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  }

  clearAni(event: any) {
    event.currentTarget.style.transform = `perspective(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }

  comeToView() {
    const y = this.aboutRef.nativeElement.offsetTop;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
