import { ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TreeNode } from "primeng/api";

import { addClassSelectors } from "../../../share/selector.utils";

import { UniversalMetainfoModel } from "../../../models/metainfo.model";
import { PathParamModel } from "../../../models/tree.model";

import { _MAIN_PAGE_MENU_LIST_ } from "../../../data/menu.data";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngx-home-intro-part',
    templateUrl: './intro.component.html'
})
export class NGXHomeIntroPartComponent {

    protected readonly I18N_TITLE: string = $localize`:@@home.page.intro.part.title:INTRODUCTIONS`;
    protected readonly I18N_SUBTITLE: string = $localize`:@@home.page.intro.part.subtitle:This website is a visual platform for the process of sorting algorithms. All soring algorithms are written by Typescript. In addition, it also displays visual results of each sorting algorithm, and users can understand advantages and disadvantages by a comparison of each sorting algorithm intuitively. `;
    protected readonly list: UniversalMetainfoModel[] = [
        {
            contents: [
                $localize`:@@home.page.intro.part.content.how.1:This platform offers a canvas to display the precess and the result of each sorting algorithm. `,
                $localize`:@@home.page.intro.part.content.how.2:The entire process is presented by each column aligned one by one, just like histogram. `,
                $localize`:@@home.page.intro.part.content.how.3:There is a canvas displaying visualization of the process and result of each sorting algorithm, just like a histogram. `,
                $localize`:@@home.page.intro.part.content.how.4:User only need to setup necessary parameters by relevant controllers, and then click button 'Run' to run a sorting task. `
            ],
            media: {
                mediaAlt: 'assets/images/image-001.webp',
                mediaSrc: 'assets/images/image-001.webp',
            },
            title: $localize`:@@home.page.intro.part.title.how:HOW IT WORKS`,
        },
        {
            contents: [
                $localize`:@@home.page.intro.part.content.what.1:This is a web base platform of visualization of sorting algorithms. `,
                $localize`:@@home.page.intro.part.content.what.2:Users can explicitly understand how an unsorted array can be sorted by any sorting algorithm. `
            ],
            media: {
                mediaAlt: 'assets/images/image-002.webp',
                mediaSrc: 'assets/images/image-002.webp',
            },
            title: $localize`:@@home.page.intro.part.title.what:WHAT IT IS`,
        },
        {
            contents: [
                $localize`:@@home.page.intro.part.content.which.1:There includes conventional and unconventional sorting algorithms. `,
                $localize`:@@home.page.intro.part.content.which.2:Conventional sorting algorithms include Bubble-Sort, Selection-Sort, Insertion-Sort, Quick-Sort, Merge-Sort, etc. `,
                $localize`:@@home.page.intro.part.content.which.3:Unconventional sorting algorithms include Bogo-Sort, Slow-Sort, Pancake-Sort, Gnome-Sort, Stooge-Sort, etc. `
            ],
            media: {
                mediaAlt: 'assets/images/image-003.webp',
                mediaSrc: 'assets/images/image-003.webp',
            },
            title: $localize`:@@home.page.intro.part.title.which:WHICH SORTING ALGORITHMS`
        },
        {
            contents: [
                $localize`:@@home.page.intro.part.content.who.1:Any people can use it to learn sorting algorithms, unless they have permissions. `,
                $localize`:@@home.page.intro.part.content.who.2:This platform will assign a valid token for each user at random. `,
                $localize`:@@home.page.intro.part.content.who.3:After that token pasted and validated, users can use and enjoy sorting algorithms. `
            ],
            media: {
                mediaAlt: 'assets/images/image-004.webp',
                mediaSrc: 'assets/images/image-004.webp',
            },
            title: $localize`:@@home.page.intro.part.title.who:WHO USE IT`,
        }
    ];

    protected isHover: boolean = false;

    constructor(
        protected _route: ActivatedRoute,
        protected _element: ElementRef,
        protected _renderer: Renderer2,
        protected _router: Router
    ) { }

    ngOnInit(): void {
        addClassSelectors(this._element.nativeElement, this._renderer, 'ngx-home-intro-part', 'flex', 'justify-content-center');
    }

    protected handleGetStartedEvent(): void {
        const node: TreeNode<PathParamModel<string>> = _MAIN_PAGE_MENU_LIST_[0];

        if (node.data && node.key)
            this._router.navigate(node.data.path, {
                relativeTo: this._route,
                queryParams: { key: window.btoa(node.key) }
            });
    }

}
