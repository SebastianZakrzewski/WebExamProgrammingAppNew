import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Credentials} from "./model/Credentials";
import {User} from "./model/User";


@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;
  constructor(private http:HttpClient) { }

  authenticate(credentials:Credentials,callback:Function ) {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.email + ':' + credentials.password)
    } : {});

    this.http.get<User>('', {headers: headers}).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }





}
