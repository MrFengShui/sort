import { ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2 } from "@angular/core";

import { addClassSelectors } from "../../../share/selector.utils";

import { UniversalMetainfoModel } from "../../../models/metainfo.model";
import { totalOfLeafNodes } from "../../../share/tree.utils";
import { _MAIN_PAGE_MENU_LIST_ } from "../../../data/menu.data";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngx-home-func-part',
    templateUrl: './func.component.html'
})
export class NGXHomeFuncPartComponent implements OnInit {

    protected readonly I18N_TITLE: string = $localize`:@@home.page.func.part.title:SORTING ALGORITHMS`;
    protected readonly I18N_SUBTITLE: string = $localize`:@@home.page.func.part.subtitle:There are about ${totalOfLeafNodes(_MAIN_PAGE_MENU_LIST_[2])} sorting algorithms exsiting in this platform. These algorithms are either conventional or unconventional in general. Furthermore, Some of these conventional algorithms are classified into one of comparison, distribution, hybrid, and parallel network. `;
    protected readonly list: UniversalMetainfoModel[] = [
        { title: $localize`:@@home.page.func.part.title.bubble:Bubble Sort`, isHover: false },
        { title: $localize`:@@home.page.func.part.title.bucket:Bucket Sort`, isHover: false },
        { title: $localize`:@@home.page.func.part.title.counting:Counting Sort`, isHover: false },
        { title: $localize`:@@home.page.func.part.title.intro:Heap Sort`, isHover: false },
        { title: $localize`:@@home.page.func.part.title.insert:Insertion Sort`, isHover: false },
        { title: $localize`:@@home.page.func.part.title.shell:Shell Sort`, isHover: false },
        { title: $localize`:@@home.page.func.part.title.select:Selection Sort`, isHover: false },
        { title: $localize`:@@home.page.func.part.title.merge:Merge Sort`, isHover: false },
        { title: $localize`:@@home.page.func.part.title.quick:Quick Sort`, isHover: false },
        { title: $localize`:@@home.page.func.part.title.radix:Radix Sort`, isHover: false },
        { title: $localize`:@@home.page.func.part.title.more:More`, isHover: false },
    ];

    constructor(
        protected _element: ElementRef,
        protected _renderer: Renderer2
    ) { }

    ngOnInit(): void {
        addClassSelectors(this._element.nativeElement, this._renderer, 'ngx-home-func-part', 'flex', 'justify-content-center');
    }

}
