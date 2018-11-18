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

    changeSalary (){
      
       this.Salary = 50000;
    }
   }



