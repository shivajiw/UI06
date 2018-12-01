import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentchild',
  templateUrl: './parentchild.component.html',
  styleUrls: ['./parentchild.component.css']
})
export class ParentchildComponent implements OnInit {

  constructor() { }

  title = "";
  currentClickedId:number = 0;
  employeeArray = [
    {
      "id":1,
      "name":"Vitthal",
      "address":{
        "building":"Star ho hos-society",
        "area":"Bhekarainagar",
        "location":"Hadapsar",
        "city":"Pune",
        "id":1
      }
    },
      {
        "id":2,
        "name":"SHivaji",
        "address":{
          "building":"Shivani Kunj hos-society",
          "area":"Udyamnagar",
          "location":"PCNC",
          "city":"Pune",
          "id":2
        }
      },
        {
          "id":3,
          "name":"Mahesh",
          "address":{
            "building":"Akash hos-society",
            "area":"Rajagurunagar",
            "location":"Rajagurunagar",
            "city":"Pune",
            "id":3
          }
        },
          {
            "id":4,
            "name":"Sibasis",
            "address":{
              "building":"Epic hos-society",
              "area":"Wagholi",
              "location":"Wagholi",
              "city":"Pune",
              "id":4
            }                        
    }
  ];

  ngOnInit() {
  }

  getIdFromChild( data ){
    this.currentClickedId = data;
  }

}
