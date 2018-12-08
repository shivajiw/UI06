
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()

export class ApplicationService {

  constructor( private http: HttpClient ) { }

  empInfo:any = {
      id:1,
      name:"Mahesh"
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

     getEmployeeDetails(){
        return this.employees;
     }
     private extractData(res: Response) {
      let body = res;
      return body || { };
    }

     getAllEployess(): Observable<any> {
        return this.http.get("assets/employee-details.json").pipe(map(this.extractData));
     }




}


