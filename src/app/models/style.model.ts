export type StyleColorName = 'amber' | 'emerald' | 'indigo' | 'orange' | 'rose' | 'sky' | 'violet';
export type StyleThemeName = 'aura' | 'material' | 'lara' | 'nora';

export interface StyleConfigModel {

    color: StyleColorName;
    darkMode: boolean;
    theme: StyleThemeName;

}
