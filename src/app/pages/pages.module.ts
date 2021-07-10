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
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { NgZorroAntdModule } from "../ng-zorro-antd.module";


@NgModule({
    declarations: [
        PagesComponent,
        ProductComponent,
        OrderComponent,
        CartComponent,
        ProfileComponent,
        StoreComponent
    ],
    imports: [
        SurveyModule,
        CommonModule,
        AppRoutingPageModule,
        SharedModule,
        FormsModule,
        NgZorroAntdModule
    ],
    providers: []
})

export class PagesModule {}