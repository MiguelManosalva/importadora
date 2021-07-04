import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [{
  path: 'app',
  component: PagesComponent,
  children: [
    { path: 'productos', component: ProductComponent, data: { titulo: 'Productos' } },
    { path: 'carrito', component: CartComponent, data: { titulo: 'Carrito' } },
    { path: 'pedidos', component: OrderComponent, data: { titulo: 'Pedidos' } },
    { path: 'bodega', component: StoreComponent, data: { titulo: 'Bodega' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil' } },

    { path: '', redirectTo: 'productos', pathMatch: 'full' },
    { path: '*', redirectTo: '', pathMatch: 'full' }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingPageModule { }
