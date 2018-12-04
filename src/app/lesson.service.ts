import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './subject';
import { httpOptions } from './auth.service';

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
