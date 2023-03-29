import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private loginService: LoginService) {}

  ngOnInit() { }

  onSubmit() {
    this.loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).pipe(
      tap(response => console.log(response)),
      tap(error => console.log(error))
    ).subscribe();
  }
}