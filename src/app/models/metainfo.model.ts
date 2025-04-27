export interface UniversalMetainfoModel {

    media?: UniversalMetainfoMediaModel;
    title?: string;
    subtitle?: string;
    contents?: string[];
    isHover?: boolean;

}

interface UniversalMetainfoMediaModel {

    mediaAlt: string;
    mediaSrc: string;

}
