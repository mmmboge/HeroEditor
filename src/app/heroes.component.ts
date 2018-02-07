import { OnInit, Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService) {

  }
  public ngOnInit() {
    this.heroService.getHeroes().subscribe(res => {
      this.heroes = res;
    });
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
