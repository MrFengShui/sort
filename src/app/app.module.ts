import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        ButtonModule,
        AppRoutingModule
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
