import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Firestorm',
      description: 'This hero have magic spells',
      thumbnail: './assets/images/hero1.jpg',
      isActive: false
    },
    {
      id: 2,
      name: 'Windstorm',
      description: 'This hero have magic spells also can summon allies from any place',
      thumbnail: './assets/images/hero2.jpg',
      isActive: false
    },
    {
      id: 3,
      name: 'Barbarian',
      description: 'The Barbarian Hero is the ancient-era Badass, armed with muscles upon muscles and a variety of very sharp bladed objects, whose job it is to kill lots of monsters and kick lots of ass.',
      thumbnail: './assets/images/hero3.jpg',
      isActive: false
    },
    {
      id: 4,
      name: 'Windstorm',
      description: 'This hero have magic spells',
      thumbnail: './assets/images/hero2.jpg',
      isActive: false
    },
    {
      id: 5,
      name: 'Firestorm',
      description: 'This hero have magic spells',
      thumbnail: './assets/images/hero1.jpg',
      isActive: false
    },
    {
      id: 6,
      name: 'Barbarian',
      description: 'The Barbarian Hero is the ancient-era Badass, armed with muscles upon muscles and a variety of very sharp bladed objects, whose job it is to kill lots of monsters and kick lots of ass.',
      thumbnail: './assets/images/hero3.jpg',
      isActive: false
    }
  ];

  checkedHeroes: Hero[] | any = [];

  constructor() {
  }

  ngOnInit() {}

  clickHandler(hero: Hero): void {
    const index: number = this.heroes.indexOf(hero);
    const checkedHero: Hero = this.heroes[index];
    const status: boolean = checkedHero.isActive === true ? false : true;

    checkedHero.isActive = status;

    if (status === true) {
      this.checkedHeroes.push(checkedHero);
    } else {
      this.checkedHeroes.splice(index, 1);
    }
  }
}