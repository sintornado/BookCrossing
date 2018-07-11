import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { User } from './models/user';
 
const url = "http://localhost:9696/api/users"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userForDashboard: User

  constructor( private http: HttpClient) { }

  get(id: number): Observable<User>{
    // console.log(this.http.get<User>(url + '/' + id));
    
    return this.http.get<User>(url + '/' + id);
    
  }

  addUser(user: User): Observable<User> {
    console.log(user);
    var t = this.http.post<User>(url, user);
    t.subscribe(function() { console.log("POST for users executed!");});
    return t;
  }

}
