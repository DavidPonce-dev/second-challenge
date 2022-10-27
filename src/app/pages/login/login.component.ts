import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from 'src/app/interfaces/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  private user!: UserLogin;

  constructor(private fb: FormBuilder) {}

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
    this.user = this.loginForm.value;
    console.log(this.user)
  }
}
