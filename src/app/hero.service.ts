import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HeroService {
    getHeroes(): Observable<Hero[]> {
        return Observable.of(HEROES);
    }
    getHero(id: number): Observable<Hero> {
        return this.getHeroes().map(heroes => {
            return heroes.find(hero => hero.id === id);
        });
    }
}
