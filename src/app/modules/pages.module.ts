import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { provideHttpClient, withJsonpSupport } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideStore, StoreModule } from "@ngrx/store";

import { AppPartModule } from "./parts.module";
import { NGXShareModule } from "./share.module";

import { NGXErrorPageComponent } from "../pages/error/error.component";
import { NGXHomePageComponent } from "../pages/home/home.component";
import { NGXLoginPageComponent } from "../pages/login/login.component";
import { NGXMainPageComponent } from "../pages/main/main.component";

import { NGXLocaleConfigEffect } from "../store/locale.effect";
import { NGXLocaleConfigReducer } from "../store/locale.reducer";
import { NGX_LOCALE_FEATURE_KEY } from "../store/locale.selector";

import { NGXStyleConfigEffect } from "../store/style.effect";
import { NGXStyleConfigReducer } from "../store/style.reducer";
import { NGX_STYLE_FEATURE_KEY } from "../store/style.selector";

import { NGXConfigurationEffect } from './../store/config.effect';
import { NGXConfigurationReducer } from "../store/config.reducer";
import { NGX_CONFIGURATION_KEY } from "../store/config.selector";
import { NGXConfigurationContentService } from "../services/config.service";

@NgModule({
    declarations: [
        NGXErrorPageComponent,
        NGXHomePageComponent,
        NGXLoginPageComponent,
        NGXMainPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        StoreModule.forFeature(NGX_LOCALE_FEATURE_KEY, { 'feature': NGXLocaleConfigReducer }),
        StoreModule.forFeature(NGX_STYLE_FEATURE_KEY, { 'feature': NGXStyleConfigReducer }),
        StoreModule.forFeature(NGX_CONFIGURATION_KEY, { 'feature': NGXConfigurationReducer }),

        AppPartModule,
        NGXShareModule
    ],
    exports: [
        NGXErrorPageComponent,
        NGXHomePageComponent,
        NGXLoginPageComponent,
        NGXMainPageComponent
    ],
    providers: [
        NGXConfigurationContentService,

        provideHttpClient(withJsonpSupport()),
        provideEffects(NGXLocaleConfigEffect, NGXStyleConfigEffect, NGXConfigurationEffect),
        provideStore(),
    ]
})
export class NGXPagesModule { }
