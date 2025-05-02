export interface NGXStyleConfigListener {

    listenStyleConfigChange(): void;

}

export interface NGXLocaleConfigListener {

    listenLocaleConfigChange(): void;

}

export interface NGXConfigurationListener {

    listenConfigurationContentChange(): void;

}
