import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

import { ConfigurationContentModel } from "../models/config.model";

@Injectable()
export class NGXConfigurationContentService {

    constructor(private _http: HttpClient) { }

    read<D = unknown>(url: string): Observable<ConfigurationContentModel<D>> {
        return this._http.get<ConfigurationContentModel<D>>(url, { responseType: 'json' });
    }

}
