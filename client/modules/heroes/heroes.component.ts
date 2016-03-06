import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Hero} from '../common/hero';
import {HeroDetailComponent} from '../details/details.component';

import {HeroService} from '../common/heroes.service'

@Component({
    selector: 'heroes',
    templateUrl: 'client/modules/heroes/heroes.html',
    styleUrls: [`client/modules/heroes/heroes.css`],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    constructor(
        private _router: Router,
        private _heroService: HeroService) { }
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }
    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
