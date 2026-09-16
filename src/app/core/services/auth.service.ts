import { Service } from '@angular/core';

@Service()
export class AuthService {
  get isAuth() {
    return !!localStorage.getItem('isAuth');
  }
}
