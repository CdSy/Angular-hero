import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  public hero:Hero = {
    id: 1,
    name: 'Windstorm',
    description: 'This hero have magic spells',
    thumbnail: './assets/images/hero1.jpg'
  }; 

  constructor() {
  }

  ngOnInit() {

  }
}