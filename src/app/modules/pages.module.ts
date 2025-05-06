import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { provideHttpClient, withJsonpSupport } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideStore, StoreModule } from "@ngrx/store";

import { AppPartModule } from "./parts.module";
import { NGXShareModule } from "./share.module";

import { NGXAuthTokenGenerationAndVerificationService, NGXAuthUserInfoService } from "../services/auth.service";

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

import { NGXAuthUserInfoEffect } from '../store/auth.effect';
import { NGXAuthUserInfoReducer } from "../store/auth.reducer";
import { NGX_AUTH_USER_INFO_KEY } from "../store/auth.selector";

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
        StoreModule.forFeature(NGX_AUTH_USER_INFO_KEY, { 'feature': NGXAuthUserInfoReducer }),

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
        NGXAuthUserInfoService, NGXAuthTokenGenerationAndVerificationService,

        provideHttpClient(withJsonpSupport()),
        provideEffects(NGXLocaleConfigEffect, NGXStyleConfigEffect, NGXAuthUserInfoEffect),
        provideStore(),
    ]
})
export class NGXPagesModule { }
