import {Component}       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './heroes/heroDetails/heroDetails.component';

import {HeroService} from './heroes/heroes.service'

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    styleUrls: [`app/app.css`],
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