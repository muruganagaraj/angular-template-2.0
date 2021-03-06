import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../common/hero';
import { HeroService } from '../common/heroes.service';


@Component({
    selector: 'dashboard',
    templateUrl: 'client/modules/dashboard/dashboard.html',
    styleUrls: [`client/modules/dashboard/dashboard.css`],
    providers: [HeroService]
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }
    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => 
            this.heroes = heroes.slice(1, 5));
    }
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}

