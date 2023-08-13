import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  SectionScrollService,
  Sections,
} from 'src/app/services/section-scroll.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @ViewChild('skills') private skillsRef!: ElementRef;

  frontendSkills: any[] = [];
  backendSkills: any[] = [];
  tools: any[] = [];
  databaseSkills:any[] = [];
  constructor(private sectionScrollService: SectionScrollService) {}

  ngOnInit(): void {
    this.setSkills();
    this.sectionScrollService.currentScroll.subscribe((scroll) => {
      if (scroll == Sections.Skills) {
        this.comeToView();
      }
    });
  }

  private setSkills() {
    this.setFrontendSkills();
    this.setBackendSkills();
    this.setTools();
    this.setDatabaseSkills();
  }

  private setFrontendSkills() {
    this.frontendSkills = [
      { icon: '../../../assets/images/html.png', name: 'HTML' },
      { icon: '../../../assets/images/css.png', name: 'CSS' },
      { icon: '../../../assets/images/js.png', name: 'Java Script' },
      { icon: '../../../assets/images/ts.png', name: 'Type Script' },
      { icon: '../../../assets/images/angular.png', name: 'Angular' },
    ];
  }

  private setBackendSkills() {
    this.backendSkills = [
      { icon: '../../../assets/images/cs.png', name: 'C#' },
      { icon: '../../../assets/images/dotNet.png', name: '.Net Core' },
    ];
  }

  private setTools() {
    this.tools = [
      { icon: '../../../assets/images/git.png', name: 'Git' },
      { icon: '../../../assets/images/gitlab.png', name: 'Gitlab' },
    ];
  }

  private setDatabaseSkills() {
    this.databaseSkills = [
      { icon: '../../../assets/images/sql.png', name: 'SQL' },
      { icon: '../../../assets/images/msSql.png', name: 'Microsoft SQL Server' },
    ];
  }

  private comeToView() {
    const y = this.skillsRef.nativeElement.offsetTop;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
