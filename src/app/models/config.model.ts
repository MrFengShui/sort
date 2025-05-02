
export interface ConfigurationContentModel<D = unknown> {

    list: D[];

}

export interface PathParamModel<E = unknown> {

    path: string[];
    param?: E;

}
