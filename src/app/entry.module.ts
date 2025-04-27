import { isDevMode, NgModule, provideZoneChangeDetection } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PreloadAllModules, provideRouter, RouterModule, withInMemoryScrolling, withPreloading, withRouterConfig } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { providePrimeNG } from 'primeng/config';

import { _ROUTES_ } from './routes/app.routing';

import { AppPagesModule } from './modules/pages.module';

import { AppEntryComponent } from './entry.component';

@NgModule({
    declarations: [AppEntryComponent],
    imports: [
        BrowserModule,
        RouterModule,
        EffectsModule.forRoot(),
        StoreModule.forRoot([], {
            runtimeChecks: {
                strictActionImmutability: true,
                strictActionSerializability: true,
                strictActionTypeUniqueness: true,
                strictStateImmutability: true,
                strictStateSerializability: true,
                strictActionWithinNgZone: true
            }
        }),

        AppPagesModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        provideAnimationsAsync(),
        provideRouter(
            _ROUTES_,
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled'
            }),
            withPreloading(PreloadAllModules),
            withRouterConfig({ onSameUrlNavigation: 'reload' })
        ),
        provideZoneChangeDetection({ eventCoalescing: true, runCoalescing: true }),
        provideStore(),
        provideStoreDevtools({
            maxAge: 32,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: true,
            traceLimit: 64,
            connectInZone: true
        }),
        providePrimeNG({
            theme: {
                options: {
                    darkModeSelector: '.p-dark-mode',
                    prefix: 'p'
                }
            }
        })
    ],
    bootstrap: [AppEntryComponent]
})
export class AppEntryModule { }
