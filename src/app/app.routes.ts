import {Routes} from '@angular/router';
import {LoginPage} from './pages/unauthorized/login-page/login-page';
import {DashboardPage} from './pages/authorized/dashboard-page/dashboard-page';
import {HistoryPage} from './pages/authorized/history-page/history-page';
import {authGuard} from './core/guards/auth-guard';
import {AuthorizedPage} from './pages/authorized/authorized-page/authorized-page';

export const ROUTE_PATHS = {
  loginPage: "login",
  dashboardPage: "dashboard",
  historyPage: "history",
}

export const routes: Routes = [
  {
    path: ROUTE_PATHS.loginPage,
    component: LoginPage,
  },
  {
    path: '',
    component: AuthorizedPage,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ROUTE_PATHS.dashboardPage,
      },
      {
        path: ROUTE_PATHS.dashboardPage,
        component: DashboardPage,
      },
      {
        path: ROUTE_PATHS.historyPage,
        component: HistoryPage,
      },
    ],
  },
];
