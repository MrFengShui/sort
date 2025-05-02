import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { TreeNode } from "primeng/api";

import { addClassSelectors } from "../../share/selector.utils";
import { findAllNodesByKey } from "../../share/tree.utils";

import { PathParamModel } from "../../models/config.model";

import { _MAIN_PAGE_MENU_LIST_ } from "../../data/menu.data";

interface OverviewMetainfo<T = unknown> {

    subject: string;
    descriptions: string[];
    nodes: TreeNode<T>[]

}

@Component({
    selector: 'ngx-overview-widget',
    templateUrl: './overview.component.html'
})
export class NGXOverviewWidgetComponent implements OnInit {

    protected list: OverviewMetainfo<PathParamModel<string>>[] = [
        {
            subject: $localize`:@@overview.widget.comparison.subject:Comparison Sorting Algorithms`,
            descriptions: [
                $localize`:@@overview.widget.comparison.description.1:Comparison sorting algorithms are a class of algorithms that determine the order of elements in a list based on comparisons. `,
                $localize`:@@overview.widget.comparison.description.2:These algorithms use a comparison operator to decide the relative order of elements. `,
                $localize`:@@overview.widget.comparison.description.3:All comparison sorting algorithms are listed out below. `,
                $localize`:@@overview.widget.comparison.description.4:Please click any button below to try and enjoy. `,
            ],
            nodes: findAllNodesByKey(_MAIN_PAGE_MENU_LIST_[2].children || [], '3-1').sort((a, b) => Number(a.key?.localeCompare(b.key || '')))
        },
        {
            subject: $localize`:@@overview.widget.distribution.subject:Distribution Sorting Algorithms`,
            descriptions: [
                $localize`:@@overview.widget.distribution.description.1:Distribution sorting algorithms are a class of algorithms that determine the order of elements in a list based on distributions. `,
                $localize`:@@overview.widget.distribution.description.2:These algorithms refer to any sorting algorithm where data is distributed from their input to multiple intermediate structures which are then gathered and places on the output. `,
                $localize`:@@overview.widget.distribution.description.3:All distribution sorting algorithms are listed out below. `,
                $localize`:@@overview.widget.distribution.description.4:Please click any button below to try and enjoy. `
            ],
            nodes: findAllNodesByKey(_MAIN_PAGE_MENU_LIST_[2].children || [], '3-2').sort((a, b) => Number(a.key?.localeCompare(b.key || '')))
        },
        {
            subject: $localize`:@@overview.widget.hybrid.subject:Hybrid Sorting Algorithms`,
            descriptions: [
                $localize`:@@overview.widget.hybrid.description.1:Hybrid sorting algorithms are a class of algorithms that use more than two comparison sorting algorithms and/or distribution sorting algorithms to decide the relative order of elements. `,
                $localize`:@@overview.widget.hybrid.description.2:All hybrid sorting algorithms are listed out below. `,
                $localize`:@@overview.widget.hybrid.description.3:Please click any button below to try and enjoy. `
            ],
            nodes: findAllNodesByKey(_MAIN_PAGE_MENU_LIST_[2].children || [], '3-3').sort((a, b) => Number(a.key?.localeCompare(b.key || '')))
        },
        {
            subject: $localize`:@@overview.widget.parallel.network.subject:Parallel Network Sorting Algorithms`,
            descriptions: [
                $localize`:@@overview.widget.parallel.network.description.1:Parallel network sorting algorithms are a class of algorithms that build up of a fixed number of carrying values to connect pairs of wires, swapping the values on the wires if they are not in a desired order. `,
                $localize`:@@overview.widget.parallel.network.description.2:All parallel network sorting algorithms are listed out below. `,
                $localize`:@@overview.widget.parallel.network.description.3:Please click any button below to try and enjoy. `
            ],
            nodes: findAllNodesByKey(_MAIN_PAGE_MENU_LIST_[2].children || [], '3-4').sort((a, b) => Number(a.key?.localeCompare(b.key || '')))
        },
        {
            subject: $localize`:@@overview.widget.curious.subject:Curious Sorting Algorithms`,
            descriptions: [
                $localize`:@@overview.widget.curious.description.1:Curious sorting algorithms collects some algorithms that are created by some weird ideas. `,
                $localize`:@@overview.widget.curious.description.2:These algorithms are either comparison sorting algorithms or distribution sorting algorithms perhaps. `,
                $localize`:@@overview.widget.curious.description.3:All curious sorting algorithms are listed out below. `,
                $localize`:@@overview.widget.curious.description.4:Please click any button below to try and enjoy. `
            ],
            nodes: findAllNodesByKey(_MAIN_PAGE_MENU_LIST_[2].children || [], '3-5').sort((a, b) => Number(a.key?.localeCompare(b.key || '')))
        }
    ];

    constructor(
        protected _elemenet: ElementRef,
        protected _renderer: Renderer2
    ) { }

    ngOnInit(): void {
        addClassSelectors(this._elemenet.nativeElement, this._renderer, 'ngx-overview-widget', 'flex', 'flex-column', 'gap-6', 'p-3', 'w-full');
    }

}
