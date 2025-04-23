export type AppStyleName = 'aura' | 'material' | 'lara' | 'nora';

export interface AppStyleConfigModel {

    color: any;
    darkMode: boolean;
    theme: AppStyleName | undefined;

}
