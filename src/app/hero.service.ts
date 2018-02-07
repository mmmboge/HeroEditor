import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HeroService {
    getHeroes(): Observable<Hero[]> {
        return Observable.of(HEROES);
    }
}
