import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  tax: SelectItem[];
  constructor() {
    this.tax = [
      {label: '5%', value: { name: '5'}},
      {label: '12%', value: {  name: '12'}},
      {label: '18%', value: {  name: '18'}},
    ];
  }

  ngOnInit() {
  }

}
