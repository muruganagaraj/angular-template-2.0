import {Component}       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HeroesComponent} from '../heroes/heroes.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {HeroDetailComponent} from '../details/details.component';

import {HeroService} from '../common/heroes.service'

@Component({
    selector: 'app',
    templateUrl: 'client/modules/app/app.html',
    styleUrls: [`client/modules/app/app.css`],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HeroService]
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    }, 
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },

])
export class AppComponent {
    title = 'Tour of Heroes';
}