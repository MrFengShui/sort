
export interface AuthenticationMetainfoModel {

    username: string;
    password: string;

}

export interface AuthorizationStatusModel {

    order: number;
    token: string;
    prevTime: number;
    currTime: number;

}

export interface AuthorizationMetainfoModel {

    avatar: string;
    name: string

}

export interface AuthenticationTokenModel {

    header?: AuthTokenHeaderModel;
    payload?: AuthTokenPayloadModel;
    signature?: string;

}

export interface AuthTokenHeaderModel {

    algorithm: 'HS256';
    type: 'JWT'

}

export interface AuthTokenPayloadModel {

    audience: string;
    expirationTime: number;
    issuer: string;
    issuedAt: number;
    jwtID: string;
    notBefore: number;
    subject: string;

}
