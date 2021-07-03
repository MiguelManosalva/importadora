// Modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { SurveyComponent } from './survey.component';
import { CardSurveyComponent } from "src/app/components/card-survey/card-survey.component";
import { NgZorroAntdModule } from "src/app/ng-zorro-antd.module";



@NgModule({
    imports:[
        CommonModule,
        NgZorroAntdModule
    ],
    declarations:[
        SurveyComponent,
        CardSurveyComponent
    ],
    exports:[
        SurveyComponent,
        CardSurveyComponent
    ]
})

export class SurveyModule {}