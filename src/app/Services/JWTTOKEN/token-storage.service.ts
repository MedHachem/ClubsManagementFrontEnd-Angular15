import { Injectable } from '@angular/core';

import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const user_key = 'role-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() {}
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  
  
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    const user = window.sessionStorage.getItem(TOKEN_KEY);
    if (user) {
      return JSON.stringify(this.getDecodedAccessToken(user));
    }
    return {};
  }
  /*
  public getUserId()
  {
   const userid = jwtHelper.decodeToken(this.getToken()).user_id;
 
  }*/
  isValidUser(role: any) {
    let status = false;
    let roles: any;
    if (!!this.getToken()) {
      roles = this.getUser();
      status = roles.includes(role);
    }
    return status;
  }

  logout() {
    window.sessionStorage.clear();
  }
  
 
}
