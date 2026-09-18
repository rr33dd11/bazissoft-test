import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {KeyValuePipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {LoginData} from '../../../shared/types/authTypes';
import {Router} from '@angular/router';
import {ROUTE_PATHS} from '../../../app.routes';
import {TuiNotification} from '@taiga-ui/core';
import {TuiToast, TuiToastService} from '@taiga-ui/kit';
import {passwordMinLength} from '../../../shared/consts/nums';
import {incorrectPasswordError, validationErrorMessages} from '../../../shared/consts/texts';

@Component({
  imports: [ReactiveFormsModule, KeyValuePipe, TuiNotification, TuiToast],
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})

export class LoginPage {
  protected readonly authService = inject(AuthService);
  protected readonly router = inject(Router);
  protected readonly toast = inject(TuiToastService)

  loginForm = new FormGroup({
    "username": new FormControl("", [Validators.required]),
    "password": new FormControl(
      "",
      [
        Validators.required,
        Validators.minLength(passwordMinLength),
        Validators.pattern('\[A-Za-z0-9]*')
      ]
    )
  })

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return
    }

    const loginData = this.loginForm.getRawValue() as LoginData;
    const loginResponse = this.authService.login(loginData)
    if (loginResponse.code == 200) {
      this.onSubmitSuccess()
    }
    else {
      this.onSubmitFailure()
    }
  }

  private onSubmitSuccess () {
    localStorage.setItem("isAuth", "true");
    this.router.navigate([ROUTE_PATHS.dashboardPage])
  }

  private onSubmitFailure () {
    this.toast.open(incorrectPasswordError, {autoClose: 2000, inline: "end", block: "end", data: ""}).subscribe()
  }

  getErrorMessage(error: string, formControl: string): string {
    const errorKey = formControl + error.charAt(0).toUpperCase() + error.slice(1);
    return validationErrorMessages[errorKey as keyof typeof validationErrorMessages];
  }
}
