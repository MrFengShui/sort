import { IMAGE_CONFIG } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { DrawerModule } from 'primeng/drawer';
import { FieldsetModule } from 'primeng/fieldset';
import { FluidModule } from 'primeng/fluid';
import { GalleriaModule } from 'primeng/galleria';
import { IconFieldModule } from 'primeng/iconfield';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ImageModule } from 'primeng/image';
import { InputIconModule } from 'primeng/inputicon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitterModule } from 'primeng/splitter';
import { TagModule } from 'primeng/tag';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';

import { MessageService } from "primeng/api";

@NgModule({
    imports: [
        ButtonModule,
        ButtonGroupModule,
        CardModule,
        CarouselModule,
        DividerModule,
        DrawerModule,
        FieldsetModule,
        FluidModule,
        GalleriaModule,
        IconFieldModule,
        IftaLabelModule,
        ImageModule,
        InputIconModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        MessageModule,
        PanelModule,
        RadioButtonModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectModule,
        SelectButtonModule,
        SplitterModule,
        TagModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        ToastModule,
        TreeModule
    ],
    exports: [
        ButtonModule,
        ButtonGroupModule,
        CardModule,
        CarouselModule,
        DividerModule,
        DrawerModule,
        FieldsetModule,
        FluidModule,
        GalleriaModule,
        IconFieldModule,
        IftaLabelModule,
        ImageModule,
        InputIconModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        MessageModule,
        PanelModule,
        RadioButtonModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectModule,
        SelectButtonModule,
        SplitterModule,
        TagModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        ToastModule,
        TreeModule
    ],
    providers: [
        MessageService,

        {
            provide: IMAGE_CONFIG,
            useValue: {
                // breakpoints: [16, 32, 48, 96, 128, 256, 384, 512, 1024, 1280, 1440, 1600, 1920, 2560],
                // placeholderResolution: 48,
                disableImageSizeWarning: true,
                disableImageLazyLoadWarning: true
            }
        }
    ]
})
export class NGXShareModule { }
