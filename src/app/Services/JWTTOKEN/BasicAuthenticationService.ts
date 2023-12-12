import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user.service';
export class JwtModel {

  constructor(
      public token : string,
      public type : string,
      public id : string,
      public username : string,
      public email : string,
      public roles : string[],
  ) 
  {

  }
  
}
export class MessageModel {
  constructor(public message: string) {}
}
export class UserModel {

  constructor(
      public username : string,
      public email : string,
      public password : string,
  ){

  }
}
export class LoginModel {
  constructor(public username: string, public password: string) {}
}
const baseUrl = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  // Dependency Injection
  constructor(private http: HttpClient) {}

  //login
  loginUser(login: LoginModel) :Observable<JwtModel> {
    return this.http.post<JwtModel>(`${baseUrl}auth`,login);
  }

}

