import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPage } from './model/user-page';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getUsers(): Observable<UserPage> {
    return this.http.get<UserPage>('https://reqres.in/api/users');
  }

}