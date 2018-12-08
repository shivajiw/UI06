import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor( private http: HttpClient) { 


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  getFormData(): Observable<any> {
    return this.http.get("assets/form1.json").pipe(map(this.extractData));
  }


}