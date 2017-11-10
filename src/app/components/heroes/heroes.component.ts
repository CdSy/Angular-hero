import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;
  newHero = {
    name: '',
    description: '',
    thumbnail: './assets/images/hero1.jpg'
  };

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  clickHandler(hero: Hero): void {
    const index = this.heroes.indexOf(hero);
    const checkedHero: Hero = this.heroes[index];

    if (this.selectedHero !== checkedHero) {
      this.selectedHero = checkedHero;
    } else {
      this.selectedHero = undefined;
    }
  }

  addHero() {
    if (this.newHero.name.length > 0) {
      const {
        name,
        description = '',
        thumbnail
      } = this.newHero;

      const newHero = new Hero(name, description, thumbnail);
      this.heroes.unshift(newHero);
      this.newHero.name = '';
      this.newHero.description = '';
    }
  }
}