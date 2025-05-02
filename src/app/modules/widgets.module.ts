import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NGXShareModule } from "./share.module";

import { NGXDashboardWidgetComponent } from "../widgets/dashboard/dashboard.component";
import { NGXDataViewWidgetComponent } from "../widgets/dataview/dataview.component";
import { NGXPlaygroundWidgetComponent } from "../widgets/playground/playground.component";
import { NGXOverviewWidgetComponent } from "../widgets/overview/overview.component";

@NgModule({
    declarations: [
        NGXDashboardWidgetComponent,
        NGXDataViewWidgetComponent,
        NGXOverviewWidgetComponent,
        NGXPlaygroundWidgetComponent
    ],
    imports: [
        CommonModule,

        NGXShareModule
    ],
    exports: [
        NGXDashboardWidgetComponent,
        NGXDataViewWidgetComponent,
        NGXOverviewWidgetComponent,
        NGXPlaygroundWidgetComponent
    ]
})
export class NGXWidgetsModule { }
