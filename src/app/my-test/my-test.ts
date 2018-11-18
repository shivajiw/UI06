import { Component } from '@angular/core';

@Component({
  selector: 'my-test',
  templateUrl: './my-test.html',
  styleUrls: ['./my-test.css']
})

export class MyTest {
    title = 'app';
  
   employee = "Sibasis"
   Salary: number = 20000;

   empDetails:object = {
     id:"2331645",
     fname:"Vitthal",
     lname:"Phawade",
     dob:"01/01/1985",
     deg:"TPO",
     salary:10000
   };   

   allEmployess:any = [ 
    {
      id:"2331645",
      fname:"Vitthal",
      lname:"Phawade",
      dob:"01/01/1985",
      deg:"TPO",
      salary:10000
    },
    {
      id:"2331646",
      fname:"Sibasis",
      lname:"Behara",
      dob:"01/01/1992",
      deg:"TPO",
      salary:9000
    },     
    {
      id:"2331647",
      fname:"Mahesh",
      lname:"Malaghe",
      dob:"10/11/1992",
      deg:"UI Developer",
      salary:11000
    },
    {
      id:"2331648",
      fname:"Devendra",
      lname:"Pawar",
      dob:"02/02/1986",
      deg:"CTO",
      salary:15000
    },
    {
      id:"2331649",
      fname:"Shivaji",
      lname:"Watekar",
      dob:"10/05/1986",
      deg:"UI Developer",
      salary:25000
    }        
   ];

    changeSalary (){
      
       this.Salary = 50000;
    }
   }



