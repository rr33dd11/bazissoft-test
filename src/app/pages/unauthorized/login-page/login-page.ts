import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {KeyValuePipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {AuthService} from '@core/services/authService';
import {LoginData} from '@shared/types/authTypes';
import {Router} from '@angular/router';
import {ROUTE_PATHS} from '../../../app.routes';
import {TuiButton, TuiError, TuiInput, TuiLabel, TuiNotification, TuiTextfield} from '@taiga-ui/core';
import {TuiToast, TuiToastService} from '@taiga-ui/kit';
import {passwordMinLength} from '@shared/consts/nums';
import {
  buttonNames,
  loginPageTexts,
  validationErrorMessages
} from '@shared/consts/texts';
import {StorageService} from '@core/services/storageService';
import {STORAGE_KEYS} from '@shared/consts/storage';
import {TuiForm} from '@taiga-ui/layout';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {WrongPasswordToast} from './components/wrong-password-toast/wrong-password-toast';

@Component({
  standalone: true,
  imports: [TuiError, TuiForm, ReactiveFormsModule, KeyValuePipe, TuiNotification, TuiToast, TuiTextfield, TuiLabel, TuiInput, TuiButton],
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})

export class LoginPage {
  protected readonly authService = inject(AuthService);
  protected readonly storageService = inject(StorageService);
  protected readonly router = inject(Router);
  protected readonly toast = inject(TuiToastService)
  protected readonly labels = loginPageTexts.loginLabels
  protected readonly buttonName = buttonNames.login

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
    this.storageService.set<boolean>(STORAGE_KEYS.isAuth, true)
    this.router.navigate([ROUTE_PATHS.dashboardPage])
  }

  private onSubmitFailure () {
    this.toast.open(new PolymorpheusComponent(WrongPasswordToast), {
      autoClose: 2000
    }).subscribe()
  }

  getErrorMessage(error: string, formControl: string): string {
    const errorKey = formControl + error.charAt(0).toUpperCase() + error.slice(1);
    return validationErrorMessages[errorKey as keyof typeof validationErrorMessages];
  }
}
