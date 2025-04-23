import { Injectable } from "@angular/core";
import { from, map, Observable } from "rxjs";

import { loadFromLocalStorage, saveToLocalStorage } from "../share/storage.utils";

import { AppLocaleConfigModel } from "../models/locale.model";

@Injectable({
    providedIn: 'root'
})
export class AppLocaleConfigService {

    private readonly APP_LOCALE_CONFIG_NAME: string = 'locale_config';

    public saveLocaleConfig(config: AppLocaleConfigModel): Observable<boolean> {
        return from(saveToLocalStorage(this.APP_LOCALE_CONFIG_NAME, JSON.stringify(config)));
    }

    public loadLocaleConfig(): Observable<AppLocaleConfigModel | null> {
        return from(loadFromLocalStorage(this.APP_LOCALE_CONFIG_NAME))
            .pipe(map(value => value ? JSON.parse(value) : null));
    }

}
