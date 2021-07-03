import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [{
  path: 'app',
  component: PagesComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Inicio' } },
    { path: 'survey', component: SurveyComponent, data: { titulo: 'Encuestas' } },

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '*', redirectTo: '', pathMatch: 'full' }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingPageModule { }
