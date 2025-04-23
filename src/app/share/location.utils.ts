import { AppLocaleName } from "../models/locale.model";

const location: Location = window.location;

export const APP_URL_HASH: string = location.hash;

export const APP_URL_HOSTNAME: string = location.hostname;

export const APP_URL_PATHNAME: string = location.pathname;

export const APP_URL_PORT: string = location.port;

export const APP_URL_EN_PORT: number = 16850;

export const APP_URL_ZH_PORT: number = 16860;

export const APP_URL_PROTOCOL: string = location.protocol;

export const assignHrefLink = (locale: AppLocaleName | string, ...args: string[]): string => {
    const path: string = APP_URL_PATHNAME.replace(/en-US|zh-CN/, locale);
    const port: number = locale === 'en-US' ? APP_URL_EN_PORT : APP_URL_ZH_PORT;
    const href: string = APP_URL_HOSTNAME.toLocaleLowerCase() === 'localhost'
        ? `${APP_URL_PROTOCOL}//${APP_URL_HOSTNAME}:${port}${path}`
        : `${APP_URL_PROTOCOL}//${APP_URL_HOSTNAME}${path}`;
    return args.length === 0 ? href : href.concat(...args);
}
