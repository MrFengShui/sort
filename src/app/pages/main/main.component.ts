import { Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Params, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { ScrollPanel } from "primeng/scrollpanel";
import { MessageService, TreeNode } from "primeng/api";
import { filter, map, Subscription } from "rxjs";

import { addClassSelectors } from "../../share/selector.utils";
import { assignHrefLink, APP_URL_HASH } from "../../share/location.utils";

import { StyleColorName, StyleConfigModel, StyleThemeName } from "../../models/style.model";
import { SelectorOptionModel } from "../../models/option.model";
import { LocaleConfigModel, LocaleName } from "../../models/locale.model";
import { PathParamModel } from "../../models/config.model";

import { NGXLocaleConfigListener, NGXStyleConfigListener } from "../../interfaces/config.interface";

import { NGXStyleFeatureSelector } from "../../store/style.selector";
import { NGXStyleConfigInitAction, NGXStyleConfigLoadAction, NGXStyleConfigLoadDoneAction, NGXStyleConfigSaveAction } from "../../store/style.action";
import { NGXLocaleFeatureSelector } from "../../store/locale.selector";
import { NGXLocaleConfigInitAction, NGXLocaleConfigLoadAction, NGXLocaleConfigLoadDoneAction } from "../../store/locale.action";
import { _MAIN_PAGE_MENU_LIST_ } from "../../data/menu.data";

@Component({
    selector: 'ngx-main-page',
    templateUrl: './main.component.html',
    providers: [MessageService]
})
export class NGXMainPageComponent implements OnInit, OnDestroy, NGXLocaleConfigListener, NGXStyleConfigListener {

    @ViewChild('outletScrollPanel', { read: ScrollPanel, static: false })
    private outletScrollPanel?: ScrollPanel;

    protected readonly I18N_MAIN_DRAWER_TITLE: string = $localize`:@@main.page.drawer.title:PREFERENCE`;
    protected readonly I18N_MAIN_DRAWER_LABEL_CHANGE: string = $localize`:@@main.page.drawer.label.change:Change`;
    protected readonly I18N_MAIN_DRAWER_LABEL_COLOR: string = $localize`:@@main.page.drawer.label.color:Color`;
    protected readonly I18N_MAIN_DRAWER_LABEL_DEFAULT: string = $localize`:@@main.page.drawer.label.default:Default`;
    protected readonly I18N_MAIN_DRAWER_LABEL_LOCALE: string = $localize`:@@main.page.drawer.label.locale:Locale`;
    protected readonly I18N_MAIN_DRAWER_LABEL_MODE: string = $localize`:@@main.page.drawer.label.mode:Mode`;
    protected readonly I18N_MAIN_DRAWER_LABEL_OR: string = $localize`:@@main.page.drawer.label.or:OR`;
    protected readonly I18N_MAIN_DRAWER_LABEL_STYLE: string = $localize`:@@main.page.drawer.label.style:Style`;
    protected readonly I18N_MAIN_DRAWER_LABEL_THEME: string = $localize`:@@main.page.drawer.label.theme:Theme`;
    protected readonly I18N_MAIN_DRAWER_LOCALE_EN: string = $localize`:@@main.page.drawer.locale.en:English`;
    protected readonly I18N_MAIN_DRAWER_LOCALE_ZH: string = $localize`:@@main.page.drawer.locale.zh:Chinese`;
    protected readonly I18N_MAIN_DRAWER_STYLE_COLOR_AMBER: string = $localize`:@@main.page.drawer.style.color.amber:Amber`;
    protected readonly I18N_MAIN_DRAWER_STYLE_COLOR_EMERALD: string = $localize`:@@main.page.drawer.style.color.emerald:Emerald`;
    protected readonly I18N_MAIN_DRAWER_STYLE_COLOR_INDIGO: string = $localize`:@@main.page.drawer.style.color.indigo:Indigo`;
    protected readonly I18N_MAIN_DRAWER_STYLE_COLOR_ORANGE: string = $localize`:@@main.page.drawer.style.color.orange:Orange`;
    protected readonly I18N_MAIN_DRAWER_STYLE_COLOR_ROSE: string = $localize`:@@main.page.drawer.style.color.rose:Rose`;
    protected readonly I18N_MAIN_DRAWER_STYLE_COLOR_SKY: string = $localize`:@@main.page.drawer.style.color.sky:Sky`;
    protected readonly I18N_MAIN_DRAWER_STYLE_COLOR_VIOLET: string = $localize`:@@main.page.style.color.violot:Violet`;
    protected readonly I18N_MAIN_DRAWER_STYLE_THEME_AURA: string = $localize`:@@main.page.drawer.style.theme.aura:Aura`;
    protected readonly I18N_MAIN_DRAWER_STYLE_THEME_LARA: string = $localize`:@@main.page.drawer.style.theme.lara:Lara`;
    protected readonly I18N_MAIN_DRAWER_STYLE_THEME_MATERIAL: string = $localize`:@@main.page.drawer.style.theme.material:Material`;
    protected readonly I18N_MAIN_DRAWER_STYLE_THEME_NORA: string = $localize`:@@main.page.drawer.style.theme.nora:Nora`;
    protected readonly I18N_MAIN_DRAWER_STYLE_MODE_OFF: string = $localize`:@@main.page.drawer.style.mode.off:Light Mode`;
    protected readonly I18N_MAIN_DRAWER_STYLE_MODE_ON: string = $localize`:@@main.page.drawer.style.mode.on:Dark Mode`;
    protected readonly I18N_MAIN_MENU_EMPTY_MESSAGE: string = $localize`:@@main.page.menu.empty.message:No Data Available`;
    protected readonly I18N_MAIN_TOOLTIP_CLOSE: string = $localize`:@@main.page.tooltip.close:Close`;
    protected readonly I18N_MAIN_TOOLTIP_PREFERENCE: string = $localize`:@@main.page.tooltip.preference:Preference`;
    protected readonly I18N_MAIN_TOOLTIP_SCROLL_TO_TOP: string = $localize`:@@main.page.tooltip.scroll.to.top:Scroll to Top`;

    protected readonly nodes: TreeNode<PathParamModel<string>>[] = _MAIN_PAGE_MENU_LIST_;

    protected localeConfig: LocaleConfigModel | undefined;
    protected styleConfig: StyleConfigModel | undefined;
    protected drawerVisible: boolean = false;
    protected isDarkMode: boolean = false;
    protected localeOptions: SelectorOptionModel<LocaleName | string>[] = [
        { label: this.I18N_MAIN_DRAWER_LOCALE_EN, value: 'en-US' },
        { label: this.I18N_MAIN_DRAWER_LOCALE_ZH, value: 'zh-CN' }
    ];
    protected styleColorOptions: SelectorOptionModel<StyleColorName>[] = [
        { label: this.I18N_MAIN_DRAWER_STYLE_COLOR_AMBER, value: 'amber' },
        { label: this.I18N_MAIN_DRAWER_STYLE_COLOR_EMERALD, value: 'emerald' },
        { label: this.I18N_MAIN_DRAWER_STYLE_COLOR_INDIGO, value: 'indigo' },
        { label: this.I18N_MAIN_DRAWER_STYLE_COLOR_ORANGE, value: 'orange' },
        { label: this.I18N_MAIN_DRAWER_STYLE_COLOR_ROSE, value: 'rose' },
        { label: this.I18N_MAIN_DRAWER_STYLE_COLOR_SKY, value: 'sky' },
        { label: this.I18N_MAIN_DRAWER_STYLE_COLOR_VIOLET, value: 'violet' }
    ];
    protected styleThemeOptions: SelectorOptionModel<StyleThemeName>[] = [
        { label: this.I18N_MAIN_DRAWER_STYLE_THEME_AURA, value: 'aura' },
        { label: this.I18N_MAIN_DRAWER_STYLE_THEME_LARA, value: 'lara' },
        { label: this.I18N_MAIN_DRAWER_STYLE_THEME_MATERIAL, value: 'material' },
        { label: this.I18N_MAIN_DRAWER_STYLE_THEME_NORA, value: 'nora' }
    ];

    private realNodeKey: string | undefined;

    private localeConfigStore$: Subscription = Subscription.EMPTY;
    private styleConfigStore$: Subscription = Subscription.EMPTY;
    private routerEvents$: Subscription = Subscription.EMPTY;

    constructor(
        protected _route: ActivatedRoute,
        protected _element: ElementRef,
        protected _renderer: Renderer2,
        protected _router: Router,
        protected _zone: NgZone,
        protected _store: Store,

        protected _msgService: MessageService
    ) {
        this.listenLocaleConfigChange();
        this.listenStyleConfigChange();
        this.listenRouterEventsChange();
    }

    ngOnInit(): void {
        addClassSelectors(this._element.nativeElement, this._renderer, 'ngx-main-page', 'flex', 'flex-column', 'w-screen', 'h-screen');

        this._store.dispatch(NGXLocaleConfigLoadAction());
        this._store.dispatch(NGXStyleConfigLoadAction());
    }

    ngOnDestroy(): void {
        if (!this.localeConfigStore$.closed) this.localeConfigStore$.unsubscribe();

        if (!this.styleConfigStore$.closed) this.styleConfigStore$.unsubscribe();

        if (!this.routerEvents$.closed) this.routerEvents$.unsubscribe();
    }

    listenLocaleConfigChange(): void {
        this._zone.runOutsideAngular(() => {
            this.localeConfigStore$ = this._store
                .select(NGXLocaleFeatureSelector)
                .pipe(filter(state => state.action === NGXLocaleConfigLoadDoneAction.type))
                .subscribe(state =>
                    this._zone.run(() => {
                        const model: LocaleConfigModel = state.result as LocaleConfigModel;

                        if (this.localeConfig)
                            this.localeConfig.locale = model.locale;
                        else
                            this.localeConfig = { locale: model.locale };
                    }));
        });
    }

    listenStyleConfigChange(): void {
        this._zone.runOutsideAngular(() => {
            this.styleConfigStore$ = this._store.select(NGXStyleFeatureSelector)
                .pipe(filter(state => state.action === NGXStyleConfigLoadDoneAction.type))
                .subscribe(state =>
                    this._zone.run(() => {
                        const model: StyleConfigModel = state.result as StyleConfigModel;
                        this.isDarkMode = Boolean(model.darkMode);

                        if (this.styleConfig) {
                            this.styleConfig.color = model.color;
                            this.styleConfig.darkMode = model.darkMode;
                            this.styleConfig.theme = model.theme;
                        } else
                            this.styleConfig = { color: model.color, darkMode: Boolean(model.darkMode), theme: model.theme };
                    }));
        });
    }

    protected handleTreeNodeEvent(node: TreeNode<PathParamModel<string>>): void {
        if (node.children && node.children.length > 0)
            node.expanded = !Boolean(node.expanded);
        else {
            const params: Params = { key: window.btoa(node.key || '') };

            if (node.data?.param)
                params['name'] = window.btoa(node.data.param);

            this._router.navigate(node.data?.path || [], { queryParams: params });
        }
    }

    protected handleChangeLocaleEvent(): void {
        if (this.localeConfig)
            window.location.replace(assignHrefLink(this.localeConfig.locale, APP_URL_HASH));
    }

    protected handleDefaultLocaleEvent(): void {
        if (this.localeConfig)
            this._store.dispatch(NGXLocaleConfigInitAction());
    }

    protected handleChangeStyleEvent(): void {
        if (this.styleConfig)
            this._store.dispatch(NGXStyleConfigSaveAction(this.styleConfig));
    }

    protected handleDefaultStyleEvent(): void {
        if (this.localeConfig)
            this._store.dispatch(NGXStyleConfigInitAction());
    }

    protected handleScrollToTopEvent(): void {
        if (this.outletScrollPanel)
            this.outletScrollPanel.scrollTop(0);
    }

    protected listenLocaleChange(value: LocaleName): void {
        if (this.localeConfig)
            this.localeConfig.locale = value;
    }

    protected listenStyleColorChange(value: StyleColorName): void {
        if (this.styleConfig)
            this.styleConfig.color = value;
    }

    protected listenStyleModeChange(flag: boolean | undefined): void {
        if (this.styleConfig)
            this.styleConfig.darkMode = Boolean(flag);
    }

    protected listenStyleThemeChange(value: StyleThemeName): void {
        if (this.styleConfig)
            this.styleConfig.theme = value;
    }

    protected detectPreferenceDrawerShow(): void {
        this._store.dispatch(NGXLocaleConfigLoadAction());
        this._store.dispatch(NGXStyleConfigLoadAction());
    }

    protected matchNodeByKey(node: TreeNode<PathParamModel<string>>): boolean {
        return Boolean(this.realNodeKey && node.key === window.atob(this.realNodeKey));
    }

    private listenRouterEventsChange(): void {
        this._zone.runOutsideAngular(() => {
            this.routerEvents$ = this._router.events
                .pipe(
                    filter(event => event instanceof NavigationEnd),
                    map(() => this._route.snapshot)
                )
                .subscribe(route => {
                    this.realNodeKey = route.queryParams['key'];

                    if (this.realNodeKey)
                        this.expandAllParentNodes(this.nodes, window.atob(this.realNodeKey));
                });
        });
    }

    private expandAllParentNodes(nodes: TreeNode<PathParamModel<string>>[], key: string): void {
        let stack: TreeNode<PathParamModel<string>>[] | undefined = [];
        let node: TreeNode<PathParamModel<string>> | undefined;

        for (let i = nodes.length - 1; i > -1; i--)
            stack.push(nodes[i]);

        while (stack.length > 0) {
            node = stack.pop();

            if (node?.key) {
                node.expanded = key.startsWith(node.key);

                if (node.children)
                    for (let i = node.children.length - 1; i > -1; i--)
                        stack.push(node.children[i]);
            }
        }

        stack.splice(0);
        stack = undefined;
        node = undefined;
    }

}
