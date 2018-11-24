import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  pageName = "Example of inbuild directive";
 empInfo:object = {
   id:"2331645",
   fname:"Vitthal",
   lname:"Phawade",
   city:"Latur",
   exp:"10",
   deg:"TPO",
   salary:10000
 }

 employees:any = [
{
  id:"2331645",
  fname:"Vitthal",
  lname:"Phawade",
  city:"Latur",
  exp:"10",
  deg:"TPO",
  salary:10000
},

{
  id:"2331646",
  fname:"Priti",
  lname:"Maske",
  city:"Pune",
  exp:"5",
  deg:"TPO",
  salary:15000
},

{
  id:"2331726",
  fname:"Sibasis",
  lname:"Behara",
  city:"Bhuvneshwar",
  exp:"2",
  deg:"TPO",
  salary:8000
},

{
  id:"2332467",
  fname:"Mahesh",
  lname:"Malghe",
  city:"Pune",
  exp:"2",
  deg:"UI Developer",
  salary:20000
},

{
  id:"2332158",
  fname:"Shivaji",
  lname:"Watekar",
  city:"Pune",
  exp:"10",
  deg:"Sr. UI Developer",
  salary:40000
}
 ];

  ngOnInit() {
  }

}
