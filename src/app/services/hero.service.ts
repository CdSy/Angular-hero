import { Injectable } from '@angular/core';
import { Hero } from '../components/heroes/hero';
import { HEROES } from '../data/mock-heroes';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}