import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{
  isMobile: boolean = false;
  isLandscapeMode: boolean = false;
  width:number = window.innerWidth;
  height:number = window.innerHeight;
  mobileWidth:number  = 760;
  landscapeWidht:number = 844;

  ngOnInit(): void {
    this.isMobile = this.width < this.mobileWidth;
    this.isLandscapeMode = this.width < this.landscapeWidht;
    console.log(this.isMobile);
  }

  onWindowRessize(event: { target: { innerWidth: number; innerHeight: number; }; }){
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    this.isLandscapeMode = this.width < this.landscapeWidht;
    console.log(this.width);
  }
  
}
