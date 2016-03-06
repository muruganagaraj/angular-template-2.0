import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Hero} from '../common/hero';
import {HeroDetailComponent} from './heroDetails/heroDetails.component';

import {HeroService} from './heroes.service'

@Component({
    selector: 'heroes',
    templateUrl: 'app/heroes/heroes.html',
    styleUrls: [`app/heroes/heroes.css`],
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
