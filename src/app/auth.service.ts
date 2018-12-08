import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export function httpOptions() {
  const headers = { 'Content-Type': 'application/json' };
  if(window.localStorage.getItem('token')) {
    headers['Authorization'] = window.localStorage.getItem('token');
  }
  return {
    headers: new HttpHeaders(headers)
  };
};

export const baseUrl: string = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = null;
  redirectUrl: string;
  private url: string = `${baseUrl}/users/me`;

  constructor(private http: HttpClient) { }

  async login(username: string, password: string): Promise<any> {
    const token = btoa(`${username}:${password}`);
    localStorage.setItem('token', `Basic ${token}`);
    if(await this.authenticate()) Promise.resolve();
    else Promise.reject();
  }

  async authenticate(): Promise<boolean> {
    try {
      this.user = await this.http.get<User>(this.url, httpOptions()).toPromise();
      return Promise.resolve(true);
    }
    catch {
      localStorage.removeItem('token');
      return Promise.resolve(false);
    }
  }

  logout() {
    this.user = null;
    localStorage.removeItem('token');
  }
}
