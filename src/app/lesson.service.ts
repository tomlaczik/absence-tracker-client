import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './subject';
import { httpOptions } from './auth.service';
import { User } from './user';
import { Lesson } from './lesson';
import { Absence } from './absence';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private url: string = 'http://localhost:8080/subjects';

  constructor(private http: HttpClient) { }

  getAll(): Promise<Subject[]> {
    return this.http.get<Subject[]>(this.url, httpOptions()).toPromise();
  }

  getStudents(lesson: Lesson): Promise<User[]> {
    return this.http.get<User[]>(`http://localhost:8080/lessons/${lesson.id}/students`, httpOptions()).toPromise();
  }

  addUser(lesson: Lesson, user: User): Promise<User> {
    return this.http.post<User>(`http://localhost:8080/users/${user.id}/activeLessons`, lesson, httpOptions()).toPromise();
  }

  removeUser(lesson: Lesson, user: User): Promise<User> {
    return this.http.delete<User>(`http://localhost:8080/users/${user.id}/activeLessons/${lesson.id}`, httpOptions()).toPromise();
  }

  addAbsence(absence: Absence, lesson: Lesson, user: User): Promise<Absence> {
    return this.http.post<Absence>(`http://localhost:8080/lessons/${lesson.id}/absences?user=${user.id}`, absence, httpOptions()).toPromise();
  }
}
