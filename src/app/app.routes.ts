import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { Login } from './pages/login/login';
import { AuthCallback } from './pages/auth-callback/auth-callback';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', component: AuthCallback },
  { path: 'dashboard', component: Dashboard, canActivate: [MsalGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];
