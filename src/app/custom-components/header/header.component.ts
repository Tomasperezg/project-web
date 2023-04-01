import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { animationNav } from 'src/app/animations/mobil-nav-icon';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    animationNav
  ]
})


export class HeaderComponent implements OnInit{
  // flag be consumed by the template
  isHamburguer = true;
  onClick() {
    this.isHamburguer = !this.isHamburguer;
  }


  isMobile: boolean = false;
  isLandscapeMode: boolean = false;
  width:number = window.innerWidth;
  height:number = window.innerHeight;
  mobileWidth:number  = 760;
  landscapeWidht:number = 926;

  ngOnInit(): void {
    
    if(this.height < this.width){
      this.isLandscapeMode = true;
    }
    if(this.width > this.landscapeWidht){
      this.isLandscapeMode = false;
      
    }
    if(this.width < this.mobileWidth){
      this.isMobile = true;
      this.isLandscapeMode = false;
    }


  
    console.log("mobil: " + this.isMobile);
    console.log("landscape: " + this.isLandscapeMode);
    console.log(this.width);
    console.log(this.height);
  }

  onWindowRessize(event: { target: { innerWidth: number; innerHeight: number; }; }){
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;   
  }
  
}
