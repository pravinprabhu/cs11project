import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uname = '' ;
  password = '' ;

  constructor() { }

  ngOnInit() {
  }

  login ( uname , password ) {


    if ( uname === 'admin' && password === '1234' ) {

    window.location.href = '/admin';
    }
    else if ( uname === 'staff' && password === '1234' ) {

      window.location.href = '/admin';
    }

  }

}
