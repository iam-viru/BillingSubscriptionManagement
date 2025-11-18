import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './modules/dashboard/dashboard';
import { Customers } from './modules/customers/customers';
import { Invoices } from './modules/invoices/invoices';
import { Settings } from './modules/settings/settings'; 
import { Login } from './modules/login/login';
import { AuthLayout } from './shared/auth-layout/auth-layout';
import { MainLayout } from './shared/main-layout/main-layout';

const routes: Routes = [
    // AUTH LAYOUT (no header/sidebar)
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', component: Login },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },

  // MAIN APP LAYOUT (with header + sidebar)
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'customers', component: Customers },
      { path: 'invoices', component: Invoices },
      { path: 'settings', component: Settings }
    ]
  },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
