import { OnInit, Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService, private router: Router) {

  }
  public ngOnInit() {
    this.heroService.getHeroes().subscribe(res => {
      this.heroes = res;
    });
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
