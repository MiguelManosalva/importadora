import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SettingsService,
  SharedService,
  SidebarService,
  SessionService,
  CartService,
  ProductService,
  OrderService,
  StoreService
} from './service.index';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    SessionService,
    CartService,
    ProductService,
    OrderService,
    StoreService
  ]
})
export class ServiceModule { }
