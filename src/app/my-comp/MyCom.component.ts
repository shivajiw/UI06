import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: './MyCom.component.html',
  styleUrls: ['./MyCom.component.css']
})

export class MyComComponent {
    title = 'app';
  
   empName:string = "Vitthal";
   currentSalary:number = 10000;

   changeSalary(){
      this.currentSalary = 20000;
   }

   

  
}


