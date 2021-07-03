// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingPageModule } from "./app-routing-page.module";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { SurveyModule } from "./survey/survey.module";

// Components
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';


@NgModule({
    declarations: [
        PagesComponent,
        ProductComponent
    ],
    imports: [
        SurveyModule,
        CommonModule,
        AppRoutingPageModule,
        SharedModule
    ],
    providers: []
})

export class PagesModule {}