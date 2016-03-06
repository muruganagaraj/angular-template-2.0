import {Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from '../../common/hero';
import { HeroService } from '../heroes.service';

@Component({
    selector: 'hero-details',
    templateUrl: `app/heroes/heroDetails/heroDetails.html`,
    styleUrls: [`app/heroes/heroDetails/heroDetails.css`],
    inputs: ['hero']
})
export class HeroDetailComponent {
    hero: Hero;
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
    goBack() {
        window.history.back();
    }

}
