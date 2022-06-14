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
        { path: '', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graph1', component: Graph1Component },
        { path: 'account-settings', component: AccountSettingsComponent },
        { path: 'promise', component: PromiseComponent },
        { path: 'rxjs', component: RxjsComponent },
    ]
}];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule { }