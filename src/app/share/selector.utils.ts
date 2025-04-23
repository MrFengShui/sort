import { ElementRef, Renderer2 } from "@angular/core";

export const addClassSelectors = (element: any, renderer: Renderer2, ...classlist: string[]): Promise<void> =>
    Promise.resolve().then(() =>
        classlist.forEach(name => renderer.addClass(element, name)));

export const removeClassSelectors = (element: any, renderer: Renderer2, ...classlist: string[]): Promise<void> =>
    Promise.resolve().then(() =>
        classlist.forEach(name => renderer.removeClass(element, name)));
