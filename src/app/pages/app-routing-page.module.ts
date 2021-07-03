import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [{
  path: 'app',
  component: PagesComponent,
  children: [
    { path: 'productos', component: ProductComponent, data: { titulo: 'Productos' } },
    { path: 'pedidos', component: SurveyComponent, data: { titulo: 'Pedidos' } },
    { path: 'bodega', component: SurveyComponent, data: { titulo: 'Bodega' } },
    { path: 'perfil', component: SurveyComponent, data: { titulo: 'Perfil' } },

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
