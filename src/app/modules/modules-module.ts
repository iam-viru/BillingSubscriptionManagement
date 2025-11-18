import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard';
import { Customers } from './customers/customers';
import { Invoices } from './invoices/invoices';
import { Settings } from './settings/settings';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { Login } from './login/login';
 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    Dashboard,
    Customers,
    Invoices,
    Settings,
    Login 
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BaseChartDirective
  ],
    providers: [
    // ⭐ VERY IMPORTANT ⭐
    provideCharts(withDefaultRegisterables())
  ],
  exports: [
    Dashboard,
    Customers,
    Invoices,
    Settings,
    Login
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModulesModule { }
