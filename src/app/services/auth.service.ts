import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, from, map, Observable, of, throwError } from "rxjs";
import { HmacSHA256, HmacMD5, enc } from "crypto-js";

import { AuthorizationStatusModel, AuthenticationMetainfoModel, AuthTokenPayloadModel, AuthenticationTokenModel } from "../models/auth.model";
import { CryptoDataFileEntity } from "../models/crypto.model";

import { loadFromLocalStorage, saveToLocalStorage } from "../share/storage.utils";
import { loadDataFromFile } from "../share/auth.utils";

@Injectable()
export class NGXAuthUserInfoService {

    private readonly AUTH_USER_INFO_HTTP_HEADERS: HttpHeaders = new HttpHeaders()
        .set('Accept', 'application/json;charset=utf-8')
        .set('Allow', 'GET')
        .set('Content-Type', 'application/json;charset=utf-8');
    private readonly AUTH_USER_INFO_NAME: string = 'auth_info';

    constructor(
        private _http: HttpClient,
        private _service: NGXAuthTokenGenerationAndVerificationService
    ) { }

    authenticate(source: AuthenticationMetainfoModel): Observable<string | undefined> {
        return this._http.get<CryptoDataFileEntity>('assets/data/auth-info.data.json', { headers: this.AUTH_USER_INFO_HTTP_HEADERS })
            .pipe(
                map(value => loadDataFromFile<AuthenticationMetainfoModel[]>(value)),
                map(array => {
                    const target: AuthenticationMetainfoModel | undefined = array.find(item => item.username === source.username);
                    return target && source.username === target.username && source.password === target.password ? target.username : undefined;
                })
            );
    }

    authorize(username: string): Observable<AuthorizationStatusModel> {
        const timestamp: number = Date.now();
        return from(loadFromLocalStorage(this.AUTH_USER_INFO_NAME))
            .pipe(
                exhaustMap(value => value ? of<AuthorizationStatusModel>(JSON.parse(value)) : throwError(() => new Error())),
                exhaustMap(model => this._service.generate(username, timestamp)
                    .pipe(
                        map(token => {
                            if (model.currTime === -1) {
                                model.currTime = timestamp;
                                model.prevTime = timestamp;
                            } else {
                                model.prevTime = model.currTime;
                                model.currTime = timestamp;
                            }

                            model.token = token;
                            return model;
                        })
                    ))
            );
    }

    fetchSelectedInfoByOrder(order: number): Observable<AuthenticationMetainfoModel> {
        return this._http.get<CryptoDataFileEntity>('assets/data/auth-info.data.json', { headers: this.AUTH_USER_INFO_HTTP_HEADERS })
            .pipe(
                map(value => loadDataFromFile<AuthenticationMetainfoModel[]>(value)),
                map(array => array[order])
            );
    }

    fetch(): Observable<AuthorizationStatusModel | undefined> {
        return from(loadFromLocalStorage(this.AUTH_USER_INFO_NAME)).pipe(map(value => value ? JSON.parse(value) : undefined));
    }

    store(model: AuthorizationStatusModel): Observable<boolean> {
        return from(saveToLocalStorage(this.AUTH_USER_INFO_NAME, JSON.stringify(model)));
    }

}

@Injectable()
export class NGXAuthTokenGenerationAndVerificationService {

    private readonly AUTH_TOKEN_CRYPTO_SECRET: string = window.btoa('PrimeNG_Admin_Secret_Key').toLowerCase();
    private readonly AUTH_TOKEN_LIFE_SPAN: number = 7 * 24 * 3600 * 1000;

    generate(id: string, timestamp: number): Observable<string> {
        return of<AuthenticationTokenModel>({})
            .pipe(
                map(model =>
                    model = {
                        ...model,
                        header: {
                            algorithm: 'HS256',
                            type: 'JWT'
                        }
                    }),
                map(model =>
                    model = {
                        ...model,
                        payload: {
                            audience: id,
                            expirationTime: timestamp + this.AUTH_TOKEN_LIFE_SPAN,
                            issuer: HmacMD5(`PrimeNG_Admin_${timestamp}`, this.AUTH_TOKEN_CRYPTO_SECRET).toString(),
                            issuedAt: timestamp,
                            jwtID: HmacMD5(`JWT_ID_${timestamp}`, this.AUTH_TOKEN_CRYPTO_SECRET).toString(),
                            notBefore: timestamp,
                            subject: HmacMD5(`PrimeNG_Admin_${timestamp}_Authorization`, this.AUTH_TOKEN_CRYPTO_SECRET).toString()
                        }
                    }),
                map(model => {
                    const header: string = enc.Base64url.stringify(enc.Utf8.parse(JSON.stringify(model.header)));
                    const payload: string = enc.Base64url.stringify(enc.Utf8.parse(JSON.stringify(model.payload)));
                    return {
                        ...model,
                        signature: HmacSHA256(`${header}_${payload}`, this.AUTH_TOKEN_CRYPTO_SECRET).toString()
                    };
                }),
                map(model => `${enc.Base64url.stringify(enc.Utf8.parse(JSON.stringify(model.header)))}.${enc.Base64url.stringify(enc.Utf8.parse(JSON.stringify(model.payload)))}.${model.signature}`)
            );
    }

    verify(token: string): Observable<boolean> {
        const parts: string[] = token.split('.');
        const payload: AuthTokenPayloadModel = JSON.parse(enc.Base64url.parse(parts[1]).toString(enc.Utf8)) as AuthTokenPayloadModel;
        const signature: string = HmacSHA256(`${parts[0]}_${parts[1]}`, this.AUTH_TOKEN_CRYPTO_SECRET).toString();
        // console.debug('1:', parts.length === 3);
        // console.debug('2:', this.checkTimestamp(payload));
        // console.debug('3:', this.checkIssuer(payload));
        // console.debug('4:', this.checkJWTID(payload));
        // console.debug('5:', this.checkSubject(payload));
        // console.debug('6:', signature === parts[2]);
        return of(parts.length === 3)
            .pipe(
                map(flag => flag && this.checkTimestamp(payload)),
                map(flag => flag && this.checkIssuer(payload)),
                map(flag => flag && this.checkJWTID(payload)),
                map(flag => flag && this.checkSubject(payload)),
                map(flag => signature === parts[2])
            );
    }

    private checkTimestamp(payload: AuthTokenPayloadModel): boolean {
        return payload.notBefore === payload.issuedAt && payload.expirationTime - Date.now() <= this.AUTH_TOKEN_LIFE_SPAN;
    }

    private checkIssuer(payload: AuthTokenPayloadModel): boolean {
        return HmacMD5(`PrimeNG_Admin_${payload.issuedAt}`, this.AUTH_TOKEN_CRYPTO_SECRET).toString() === payload.issuer;
    }

    private checkJWTID(payload: AuthTokenPayloadModel): boolean {
        return HmacMD5(`JWT_ID_${payload.issuedAt}`, this.AUTH_TOKEN_CRYPTO_SECRET).toString() === payload.jwtID;
    }

    private checkSubject(payload: AuthTokenPayloadModel): boolean {
        return HmacMD5(`PrimeNG_Admin_${payload.notBefore}_Authorization`, this.AUTH_TOKEN_CRYPTO_SECRET).toString() === payload.subject;
    }

}
