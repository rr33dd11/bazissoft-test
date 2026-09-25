import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../services/authService';
import {inject} from '@angular/core';
import {ROUTE_PATHS} from '../../app.routes';

export const authGuard: CanActivateFn = () => {
  const isAuth = inject(AuthService).isAuth;

  if (isAuth) {
    return true
  }

  return inject(Router).createUrlTree([ROUTE_PATHS.loginPage]);
};
