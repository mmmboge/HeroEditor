import { HEROES } from './mock-heros';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from 'util';
import { MessageService } from './message.service';
@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';  // URL to web api
    constructor(private http: HttpClient, private messageService: MessageService) { }
    getHeroes(): Observable<Hero[]> {
        // return this.http.get(this.heroesUrl).map(response => response.json().data).catch((err) => {
        //     return Observable.of([]);
        // });
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }
    getHero(id: number) {
        // return this.http
        //     .get(`api/heroes/${id}`)
        //     .map(response => response.json().data.find(hero => hero.id === id) as Hero);
    }
}
