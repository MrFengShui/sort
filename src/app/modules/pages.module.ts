import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideStore, StoreModule } from "@ngrx/store";

import { AppPartModule } from "./parts.module";
import { AppShareModule } from "./share.module";

import { AppErrorPageComponent } from "../pages/error/error.component";
import { NGXHomePageComponent } from "../pages/home/home.component";
import { AppMainPageComponent } from "../pages/main/main.component";

import { AppLocaleConfigEffect } from "../store/locale.effect";
import { AppLocaleConfigReducer } from "../store/locale.reducer";
import { APP_LOCALE_FEATURE_KEY } from "../store/locale.selector";

import { AppStyleConfigEffect } from "../store/style.effect";
import { AppStyleConfigReducer } from "../store/style.reducer";
import { APP_STYLE_FEATURE_KEY } from "../store/style.selector";

@NgModule({
    declarations: [
        AppErrorPageComponent,
        NGXHomePageComponent,
        AppMainPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        StoreModule.forFeature(APP_LOCALE_FEATURE_KEY, { 'feature': AppLocaleConfigReducer }),
        StoreModule.forFeature(APP_STYLE_FEATURE_KEY, { 'feature': AppStyleConfigReducer }),

        AppPartModule,
        AppShareModule
    ],
    exports: [
        AppErrorPageComponent,
        NGXHomePageComponent,
        AppMainPageComponent
    ],
    providers: [
        provideEffects(AppLocaleConfigEffect, AppStyleConfigEffect),
        provideStore(),
    ]
})
export class AppPagesModule { }
