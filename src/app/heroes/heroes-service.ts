import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Hero {
    id: number;
    name: string;
  }

@Injectable({
  providedIn: 'root',
})
export class HeroService {

    heroes: Hero[] = [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ]
  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes)
  }
  
  getHero(id :number | string) {
    return this.getHeroes().pipe(
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id))
    )
  }
}