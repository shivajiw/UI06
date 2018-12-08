import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  empInfo = {
    id:1,
    name:"VitthaL",
    lname:"PhaWadE",
    sal:10000,
    doj:"12/31/2015"
  }


}


// function convertToUppercase( str ){

// var convertToUpperCase = str.toUpperCase();
// alert( convertToUpperCase )
// return convertToUpperCase

// }

// convertToUppercase("MaHesH");