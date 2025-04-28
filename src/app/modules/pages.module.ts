import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideStore, StoreModule } from "@ngrx/store";

import { AppPartModule } from "./parts.module";
import { AppShareModule } from "./share.module";

import { AppErrorPageComponent } from "../pages/error/error.component";
import { NGXHomePageComponent } from "../pages/home/home.component";
import { NGXMainPageComponent } from "../pages/main/main.component";

import { NGXLocaleConfigEffect } from "../store/locale.effect";
import { NGXLocaleConfigReducer } from "../store/locale.reducer";
import { NGX_LOCALE_FEATURE_KEY } from "../store/locale.selector";

import { NGXStyleConfigEffect } from "../store/style.effect";
import { NGXStyleConfigReducer } from "../store/style.reducer";
import { NGX_STYLE_FEATURE_KEY } from "../store/style.selector";

@NgModule({
    declarations: [
        AppErrorPageComponent,
        NGXHomePageComponent,
        NGXMainPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        StoreModule.forFeature(NGX_LOCALE_FEATURE_KEY, { 'feature': NGXLocaleConfigReducer }),
        StoreModule.forFeature(NGX_STYLE_FEATURE_KEY, { 'feature': NGXStyleConfigReducer }),

        AppPartModule,
        AppShareModule
    ],
    exports: [
        AppErrorPageComponent,
        NGXHomePageComponent,
        NGXMainPageComponent
    ],
    providers: [
        provideEffects(NGXLocaleConfigEffect, NGXStyleConfigEffect),
        provideStore(),
    ]
})
export class AppPagesModule { }
