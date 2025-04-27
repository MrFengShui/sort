import { ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2 } from "@angular/core";

import { addClassSelectors } from "../../../share/selector.utils";
import { UniversalMetainfoModel } from "../../../models/metainfo.model";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngx-home-tech-part',
    templateUrl: './tech.component.html'
})
export class NGXHomeTechPartComponent implements OnInit {

    protected readonly I18N_TITLE: string = $localize`:@@home.page.tech.part.title:TECHNOLOGIES SUPPORTED`;
    protected readonly I18N_SUBTITLE: string = $localize`:@@home.page.tech.part.subtitle:This project is developped by Angular and PrimeNG, and built by Webpack at last. `;
    protected readonly list: UniversalMetainfoModel[] = [
        {
            contents: [
                $localize`:@@home.page.tech.part.content.angular.1:Angular lets you start small on a well-lit path and supports you as your team and apps grow. `,
                $localize`:@@home.page.tech.part.content.angular.2:Join the millions of developers all over the world building with Angular in a thriving and friendly community. `,
                $localize`:@@home.page.tech.part.content.angular.3:Rely on Angular's built-in hydration, internationalization, security, and accessibility support to build fro everyone around the world. `,
                $localize`:@@home.page.tech.part.content.angular.4:- From Angular Website`
            ],
            title: $localize`:@@home.page.tech.part.title.angular:Angular`,
            subtitle: $localize`:@@home.page.tech.part.subtitle.angular:Website: https://angular.dev/`
        },
        {
            contents: [
                $localize`:@@home.page.tech.part.content.primeng.1:PrimeNG is a next-gen suite of Open-Source UI library for Angular. `,
                $localize`:@@home.page.tech.part.content.primeng.2:There are over 200 million downloads at present. `,
                $localize`:@@home.page.tech.part.content.primeng.3:PrimeNG provides powerful customization of theme and many awesome UI components, which makes development for webpages much easier. `,
                $localize`:@@home.page.tech.part.content.primeng.4:PrimeNG is the best choice for Angular, rather than other Open-Source UI libraries based on Angular. `,
                $localize`:@@home.page.tech.part.content.primeng.5:- From PrimeNG Website. `
            ],
            title: $localize`:@@home.page.tech.part.title.primeng:PrimeNG`,
            subtitle: $localize`:@@home.page.tech.part.subtitle.primeng:Website: https://primeng.org/`
        },
        {
            contents: [
                $localize`:@@home.page.tech.part.content.webpack.1:At its core, webpack is a static module bundler for modern JavaScript applications. `,
                $localize`:@@home.page.tech.part.content.webpack.2:When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from. `,
                $localize`:@@home.page.tech.part.content.webpack.3:- From Webpack Website. `
            ],
            title: $localize`:@@home.page.tech.part.title.webpack:Webpack`,
            subtitle: $localize`:@@home.page.tech.part.subtitle.webpack:Website: https://webpack.js.org/`
        }
    ];

    constructor(
        protected _element: ElementRef,
        protected _renderer: Renderer2
    ) { }

    ngOnInit(): void {
        addClassSelectors(this._element.nativeElement, this._renderer, 'ngx-home-tech-part', 'flex', 'justify-content-center');
    }

}
