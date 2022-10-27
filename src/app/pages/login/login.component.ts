import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UserLogin } from 'src/app/interfaces/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  private user!: UserLogin;

  constructor(private _ls: LoginService, private fb: FormBuilder) {}

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
    this.user = this.loginForm.value;

    this._ls.submitLogin(this.user).subscribe({
      next(data: any){
        console.log(data)
      },
      error(err) {
          console.log(err)
      },
      complete() {
          console.log('completo')
      },
    })
  }
}
