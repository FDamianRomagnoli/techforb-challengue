import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  show = false;
  logoURL = "./assets/Logo.png";
  btnURL = "./assets/btn-ham.svg";

  displayMenu(){
    this.show = !this.show;
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
