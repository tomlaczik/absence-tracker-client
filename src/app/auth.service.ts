import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) { }

  async login(username: string, password: string): Promise<any> {
    const token = btoa(`${username}:${password}`);
    localStorage.setItem('token', `Basic ${token}`);
    if(await this.authenticate(null)) Promise.resolve();
    else Promise.reject();
  }

  async register(username: string, password: string): Promise<any> {
    try {
      let user: User = new User(username, password);
      this.user = await this.http.post<User>(`${baseUrl}/users/`, user, httpOptions()).toPromise();
      const token = btoa(`${username}:${password}`);
      localStorage.setItem('token', `Basic ${token}`);
      Promise.resolve();
    }
    catch {
      Promise.reject();
    }
  }

  async authenticate(roles: string[]): Promise<boolean> {
    try {
      this.user = await this.http.get<User>(`${baseUrl}/users/me`, httpOptions()).toPromise();
      if(!roles || roles.includes(this.user.role.toString())) return Promise.resolve(true);
      this.router.navigate(['/login']);
      return Promise.resolve(false);
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
