import { Component, HostListener, OnInit } from '@angular/core';
import { SectionScrollService } from 'src/app/services/section-scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  toggleHeader = false;

  @HostListener("document:scroll")
  scrollFun() {
    let scrollPos = document.documentElement.scrollTop;

    if (scrollPos > 150) {

      this.toggleHeader = true;
    }

    else {

      this.toggleHeader = false;
    }
  }
  
  menu = ["Home", "About", "Skills", "Projects", "Contacts"]
  constructor(private sectionScrollService:SectionScrollService) { }

  ngOnInit(): void {
  }

  navigateToSection(section:number){
      this.sectionScrollService.setSection(section);
  }
}
