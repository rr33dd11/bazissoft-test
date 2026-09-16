import {Routes} from '@angular/router';
import {LoginPage} from './pages/login-page/login-page';
import {DashboardPage} from './pages/dashboard-page/dashboard-page';
import {HistoryPage} from './pages/history-page/history-page';
import {authGuard} from './core/guards/auth-guard';

export const ROUTE_PATHS = {
  loginPage: "login",
  dashboardPage: "dashboard",
  historyPage: "history",
}

export const routes: Routes = [
  {path: ROUTE_PATHS.loginPage, component: LoginPage},
  {path: ROUTE_PATHS.dashboardPage, component: DashboardPage, canActivate: [authGuard]},
  {path: ROUTE_PATHS.historyPage, component: HistoryPage, canActivate: [authGuard]},
  {path: "", pathMatch: "full", redirectTo: ROUTE_PATHS.dashboardPage}
];
