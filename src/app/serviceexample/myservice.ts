import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Observable, of } from 'rxjs';
//import { map, catchError, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })


@Injectable()

export class MyService {

  constructor( ) { }

  applicationName:string = "My Application";

    getUserName(){
        return "Vitthal";
    }

}


