import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  hidePassword = true;
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      await this.authService.login(this.username.value, this.password.value);
      this.router.navigate([this.authService.redirectUrl || '/lessons']);
    } catch {
      this.message = 'Hibás felhasználónév vagy jelszó';
    }
  }
}