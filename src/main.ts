/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import 'default-passive-events';

import { AppEntryModule } from './app/entry.module';

platformBrowserDynamic()
    .bootstrapModule(AppEntryModule)
    .catch(err => console.error(err));
