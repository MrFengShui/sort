import { Injectable } from "@angular/core";
import { from, map, Observable } from "rxjs";

import { loadFromLocalStorage, saveToLocalStorage } from "../share/storage.utils";

import { AppStyleConfigModel } from "../models/style.model";

@Injectable({
    providedIn: 'root'
})
export class AppStyleConfigService {

    private readonly APP_STYLE_CONFIG_NAME: string = 'style_config';

    public saveStyleConfig(config: AppStyleConfigModel): Observable<boolean> {
        return from(saveToLocalStorage(this.APP_STYLE_CONFIG_NAME, JSON.stringify(config)));
    }

    public loadStyleConfig(): Observable<AppStyleConfigModel | null> {
        return from(loadFromLocalStorage(this.APP_STYLE_CONFIG_NAME))
            .pipe(map(value => value ? JSON.parse(value) : null));
    }

}
