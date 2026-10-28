import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit{

  public logueado: boolean;

  constructor(private _route: Router) {
    this.logueado = false;
  }

  navegarLogin(){
    this._route.navigate(['/Login']);
  }

  ngOnInit() {
    if(sessionStorage.getItem("token")){
      this.logueado = true;
    }
  }

}
