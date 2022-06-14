import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [{
    path: 'dashboard', component: PagesComponent,
    children: [
        { path: '', component: DashboardComponent, data: { title: 'Principal' } },
        { path: 'progress', component: ProgressComponent, data: { title: 'ProgressBar' } },
        { path: 'graph1', component: Graph1Component, data: { title: 'Gráfica #1' } },
        { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Ajustes' } },
        { path: 'promise', component: PromiseComponent, data: { title: 'Promesas' } },
        { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' } },
    ]
}];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule { }