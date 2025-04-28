import { Routes } from "@angular/router";

import { AppErrorPageComponent } from "../pages/error/error.component";
import { NGXHomePageComponent } from "../pages/home/home.component";
import { NGXMainPageComponent } from "../pages/main/main.component";
import { AppDashboardWidgetComponent } from "../widgets/dashboard/dashboard.component";
import { AppWorkspaceWidgetComponent } from "../widgets/workspace/workspace.component";

export const _ROUTES_: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: NGXHomePageComponent, title: '' },
    {
        path: 'main', component: NGXMainPageComponent, title: '',
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: AppDashboardWidgetComponent, title: '' },
            { path: 'workspace', component: AppWorkspaceWidgetComponent, title: '' }
        ]
    },
    { path: 'error/page-not-found', component: AppErrorPageComponent, title: '' },
    { path: '**', redirectTo: 'error/page-not-found' }
];
