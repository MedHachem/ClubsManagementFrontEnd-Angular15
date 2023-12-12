import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class Role {
  id!: number;
 name!:String;
 description!:String;
 
}
export class User {
  id!: number;
  username!:String;
  password!:String;
  email!:String;
  firstname!:String;
  lastname!:String;
  enabled!:true;
  roles!:any;
 
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) { }
  /*
  getUsers(): Observable<any[]>{
    
    return this.http.get<any[]>(`${this.baseUrl}`+'AllUsers');
  }*/
  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'AllUsers');
  }
  saveUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`+'NewUser', user);
  }
  getUserById(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}${id}`)
  }
  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}Delete/${id}`)
  }
  updateUser(id: number, user: User): Observable<Object>{
    return this.http.put(`${this.baseUrl}Update/${id}`, user);
  }
  countUsers():any{
    return this.http.get<any>(`${this.baseUrl}Count`)
  }
  getUserdetails(): Observable<any> {
    return this.http.get(this.baseUrl + 'user');
  }
}
