import {inject, Injectable} from '@angular/core';
import {LoginData, LoginResponse} from '@shared/types/authTypes';
import {correctLoginData} from '@shared/data/authData';
import {loginPageTexts} from '@shared/consts/texts';
import {StorageService} from './storageService';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected readonly storageService = inject(StorageService)
  get isAuth() {
    return this.storageService.has("isAuth");
  }

  login(loginData: LoginData): LoginResponse {
    if (this.validateData(loginData)) {
      return {code: 200}
    }
    return {code: 400, text: loginPageTexts.incorrectPasswordError}
  }

  private validateData(loginData: LoginData): boolean {
    return (JSON.stringify(loginData) == JSON.stringify(correctLoginData))
  }

}
