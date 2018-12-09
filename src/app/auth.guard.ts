import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.user && (!next.data.roles || next.data.roles.includes(this.authService.user.role.toString()))) return true;
    else if(localStorage.getItem('token')) return this.authService.authenticate(next.data.roles);
  
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }
}
