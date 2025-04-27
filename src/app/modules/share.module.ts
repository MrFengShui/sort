import { IMAGE_CONFIG } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    imports: [
        ButtonModule,
        ButtonGroupModule,
        CardModule,
        CarouselModule,
        DividerModule,
        FieldsetModule,
        GalleriaModule,
        ImageModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectModule,
        SelectButtonModule,
        TagModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule
    ],
    exports: [
        ButtonModule,
        ButtonGroupModule,
        CardModule,
        CarouselModule,
        DividerModule,
        FieldsetModule,
        GalleriaModule,
        ImageModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectModule,
        SelectButtonModule,
        TagModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule
    ],
    providers: [
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
export class AppShareModule { }
