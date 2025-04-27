export type AppStyleColorName = 'amber' | 'emerald' | 'indigo' | 'orange' | 'rose' | 'sky' | 'violet';
export type AppStyleThemeName = 'aura' | 'material' | 'lara' | 'nora';

export interface AppStyleConfigModel {

    color: AppStyleColorName;
    darkMode: boolean;
    theme: AppStyleThemeName;

}
