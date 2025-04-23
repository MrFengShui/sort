import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppDashboardWidgetComponent } from "../widgets/dashboard/dashboard.component";
import { AppWorkspaceWidgetComponent } from "../widgets/workspace/workspace.component";

@NgModule({
    declarations: [
        AppDashboardWidgetComponent,
        AppWorkspaceWidgetComponent
    ],
    imports: [ CommonModule ],
    exports: [
        AppDashboardWidgetComponent,
        AppWorkspaceWidgetComponent
    ]
})
export class AppWidgetsModule {}
