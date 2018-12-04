import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject } from './subject';

const httpOptions: object = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic dXNlcjI6cGFzc3dvcmQ=', // user2/password
  })
};

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private url: string = 'http://localhost:8080/subjects';

  constructor(private http: HttpClient) { }

  getAll(): Promise<Subject[]> {
    return this.http.get<Subject[]>(this.url, httpOptions).toPromise();
  }
}
