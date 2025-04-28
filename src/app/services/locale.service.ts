import { Injectable } from "@angular/core";
import { from, map, Observable } from "rxjs";

import { loadFromLocalStorage, saveToLocalStorage } from "../share/storage.utils";

import { LocaleConfigModel } from "../models/locale.model";

@Injectable({
    providedIn: 'root'
})
export class NGXLocaleConfigService {

    private readonly APP_LOCALE_CONFIG_NAME: string = 'locale_config';

    public saveLocaleConfig(config: LocaleConfigModel): Observable<boolean> {
        return from(saveToLocalStorage(this.APP_LOCALE_CONFIG_NAME, JSON.stringify(config)));
    }

    public loadLocaleConfig(): Observable<LocaleConfigModel | null> {
        return from(loadFromLocalStorage(this.APP_LOCALE_CONFIG_NAME))
            .pipe(map(value => value ? JSON.parse(value) : null));
    }

}
