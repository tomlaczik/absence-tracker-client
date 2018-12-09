import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Absence } from './absence';
import { httpOptions } from './auth.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<Absence[]> {
    return this.http.get<Absence[]>("http://localhost:8080/absences", httpOptions()).toPromise();
  }

  getSelf(user: User): Promise<Absence[]> {
    return this.http.get<Absence[]>(`http://localhost:8080/users/${user.id}/absences`, httpOptions()).toPromise();
  }

  delete(absence: Absence): Promise<Absence> {
    return this.http.delete<Absence>(`http://localhost:8080/absences/${absence.id}`, httpOptions()).toPromise();
  }

}
