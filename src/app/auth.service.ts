import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = null;
  private url: string = 'http://localhost:8080/users/me';
  redirectUrl: string;

  constructor(private http: HttpClient) { }

  async login(username: string, password: string): Promise<User> {
    try {
      const token = btoa(`${username}:${password}`);
      httpOptions.headers = httpOptions.headers.set('Authorization', `Basic ${token}`);
      this.user = await this.http.get<User>(this.url, httpOptions).toPromise();
      return Promise.resolve(this.user);
    } catch {
      return Promise.reject();
    }
  }

  logout() {
    this.user = null;
    httpOptions.headers = httpOptions.headers.set('Authorization', '');
  }
}
