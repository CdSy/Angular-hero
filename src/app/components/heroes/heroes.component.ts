import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  heroes: Hero[];

  selectedHero: Hero;
  newHero = {
    name: '',
    description: '',
    thumbnail: './assets/images/hero2.jpg'
  };


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
      this.selectedHero = null;
    }
  }

  addHero() {
    if (this.newHero.name.length > 0) {
      const {
        name,
        description = '',
        thumbnail,
        id = this.heroes.length + 1
      } = this.newHero;

      const newHero = new Hero({name, description, thumbnail, id});
      this.heroes.unshift(newHero);
      this.newHero.name = '';
      this.newHero.description = '';
      this.messageService.add(`New hero added - ${newHero.name}`);
    }
  }
}