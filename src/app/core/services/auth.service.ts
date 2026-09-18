import {Service} from '@angular/core';
import {LoginData, LoginResponse} from '../../shared/types/authTypes';
import {correctLoginData} from '../../shared/data/authData';

@Service()
export class AuthService {

  private incorrectPasswordText = "Неверный пароль, попробуйте еще раз"

  get isAuth() {
    return !!localStorage.getItem('isAuth');
  }

  login(loginData: LoginData): LoginResponse {
    if (this.validateData(loginData)) {
      return {code: 200}
    }
    return {code: 400, text: this.incorrectPasswordText}
  }

  private validateData(loginData: LoginData): boolean {
    return (JSON.stringify(loginData) == JSON.stringify(correctLoginData))
  }

}
