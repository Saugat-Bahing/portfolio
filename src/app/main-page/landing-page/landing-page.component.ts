import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  
  menu = ["Home", "About", "Skills", "Projects", "Contacts"]
  @ViewChild('about') private aboutRef!:ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

}
