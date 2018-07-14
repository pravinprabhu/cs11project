import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

interface City {
  quanity: number;

}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})



export class StaffComponent implements OnInit {
 sales = [];
 // cols =  any[];

  constructor() { }

  ngOnInit() {
    this.sales = [
      {
        brand: 'Horlicks',
        name: 'ABC',
        rate: 102.25
      },
      {
        brand: 'Boost',
        name: 'CDS',
        rate: 112.25
      }
    ];
  }

}
