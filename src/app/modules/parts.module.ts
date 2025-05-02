import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NGXShareModule } from "./share.module";

import { NGXHomeTechPartComponent } from "../parts/home/tech/tech.component";
import { NGXHomeIntroPartComponent } from "../parts/home/intro/intro.component";
import { NGXHomeFuncPartComponent } from "../parts/home/func/func.component";

@NgModule({
    declarations: [
        NGXHomeFuncPartComponent,
        NGXHomeIntroPartComponent,
        NGXHomeTechPartComponent
    ],
    imports: [
        CommonModule,

        NGXShareModule
    ],
    exports: [
        NGXHomeFuncPartComponent,
        NGXHomeIntroPartComponent,
        NGXHomeTechPartComponent
    ]
})
export class AppPartModule { }
