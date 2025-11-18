import { model, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { RouterModule } from '@angular/router';
import { Modal } from './modal/modal';
 
import { MainLayout } from './main-layout/main-layout';
import { AuthLayout } from './auth-layout/auth-layout';



@NgModule({
  declarations: [
    Header,
    Sidebar,
    Modal, 
    MainLayout, 
    AuthLayout
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
    Header,
    Sidebar,
    Modal, 
    MainLayout,
    AuthLayout
  ]
})
export class SharedModule { }
