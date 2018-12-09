import { Injectable } from '@angular/core';
import { baseUrl, httpOptions } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Absence } from './absence';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: String = `${baseUrl}/users`;

  constructor(private http: HttpClient) { }

  getAbsences(user: User): Promise<Absence[]> {
    return this.http.get<Absence[]>(`${this.url}/${user.id}/absences`, httpOptions()).toPromise();
  }

  getAll(): Promise<User[]>{
    return this.http.get<User[]>(`${this.url}/`,httpOptions()).toPromise();
  }
}
