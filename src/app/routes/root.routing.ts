import { Routes } from "@angular/router";

import { _MAIN_PAGE_MENU_LIST_ } from "../data/menu.data";

import { NGXErrorPageComponent } from "../pages/error/error.component";
import { NGXHomePageComponent } from "../pages/home/home.component";
import { NGXLoginPageComponent } from "../pages/login/login.component";
import { NGXMainPageComponent } from "../pages/main/main.component";
import { NGXDashboardWidgetComponent } from "../widgets/dashboard/dashboard.component";
import { NGXPlaygroundWidgetComponent } from "../widgets/playground/playground.component";
import { NGXOverviewWidgetComponent } from "../widgets/overview/overview.component";
import { NGXDataViewWidgetComponent } from "../widgets/dataview/dataview.component";

const _CHILD_ROUTES_: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'analytics/dashboard', component: NGXDashboardWidgetComponent, title: $localize`:@@route.title.dashboard:Dashboard Page` },
    { path: 'analytics/data-view', component: NGXDataViewWidgetComponent, title: $localize`:@@route.title.dataview:Data View Page` },
    { path: 'overview', component: NGXOverviewWidgetComponent, title: $localize`:@@route.title.overview:Overview Page` },
    { path: 'playground', component: NGXPlaygroundWidgetComponent, title: $localize`:@@route.title.playground:Playground Page` }
];

export const _ROUTES_: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: NGXHomePageComponent, title: $localize`:@@route.title.home:Home Page` },
    { path: 'login', component: NGXLoginPageComponent, title: $localize`:@@route.title.login:Login Page` },
    { path: 'main', component: NGXMainPageComponent, title: $localize`:@@route.title.main:Main Page`, children: _CHILD_ROUTES_ },
    { path: 'error/page-not-found', component: NGXErrorPageComponent, title: $localize`:@@route.title.error:Error Page - Page Not Found` },
    { path: '**', redirectTo: 'error/page-not-found' }
];
