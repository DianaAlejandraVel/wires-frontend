import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup=new FormGroup({
    username: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private registerService: RegisterService) {}

  ngOnInit() {}

  onSubmit() {
    this.registerService.register(
      this.registerForm.value.username,
      this.registerForm.value.fullName,
      this.registerForm.value.email,
      this.registerForm.value.password
      ).pipe(
        tap(response => console.log(response)),
        tap(error => console.log(error))
      ).subscribe();
  }
}
