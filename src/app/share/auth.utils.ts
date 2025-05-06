import { Renderer2 } from "@angular/core";
import { AES, SHA256, enc } from 'crypto-js';

import { CryptoDataFileEntity } from "../models/crypto.model";

const _DATA_FILE_CRYPTO_SECRET_PREFIX_: string = 'data_file_crypto_secret';

/**
 * 该方法用于将数据加密后存储到指定文件名的文件中。
 * @param renderer 渲染器
 * @param name 需要保存文件的文件名
 * @param data 需要保存的数据
 */
export const saveDataToFile = <D = unknown>(renderer: Renderer2, name: string, data: D): void => {
    const timestamp: number = Date.now();
    const entity: CryptoDataFileEntity = {
        id: SHA256(`${_DATA_FILE_CRYPTO_SECRET_PREFIX_}_${timestamp}`).toString(),
        size: Array.isArray(data) ? data.length : 0,
        algorithm: 'AES', timestamp,
        data: AES.encrypt(JSON.stringify(data), `${_DATA_FILE_CRYPTO_SECRET_PREFIX_}_${timestamp}`).toString()
    };
    const anchor: HTMLAnchorElement = renderer.createElement('a');
    anchor.href = window.URL.createObjectURL(new Blob([JSON.stringify(entity)]));
    anchor.download = name;
    anchor.click();

    window.URL.revokeObjectURL(anchor.href);
}

/**
 * 该方法用于将数据文件中的内容读出并解密。
 * @param entity 数据文件里的内容
 * @returns 指定类型的数据
 */
export const loadDataFromFile = <D = unknown>(entity: CryptoDataFileEntity): D => {
    const message: string = AES.decrypt(entity.data, `${_DATA_FILE_CRYPTO_SECRET_PREFIX_}_${entity.timestamp}`).toString(enc.Utf8);
    return JSON.parse(message);
}
