import { NgModule } from "@angular/core";

import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    imports: [
        ButtonModule,
        ButtonGroupModule,
        SelectButtonModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule
    ],
    exports: [
        ButtonModule,
        ButtonGroupModule,
        SelectButtonModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule
    ]
})
export class AppShareModule { }
