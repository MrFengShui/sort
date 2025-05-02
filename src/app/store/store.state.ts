
export interface NGXStoreReducerState<T = unknown> {

    action: string;
    message?: string;
    result?: T;

}
