import { OnInit, Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
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
