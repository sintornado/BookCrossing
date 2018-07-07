import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { User } from './models/user';
 
const url = "http://localhost:8080/api/users"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  get(id: number): Observable<User>{
    // console.log(this.http.get<User>(url + '/' + id));
    
    return this.http.get<User>(url + '/' + id);
    
  }

}
