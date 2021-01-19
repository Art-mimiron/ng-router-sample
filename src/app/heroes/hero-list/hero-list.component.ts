import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HeroService, Hero } from '../heroes-service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass']
})

export class HeroListComponent implements OnInit {
  
  public selectedHero: number;

  public heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedHero = +params.get('id');
        return this.heroService.getHeroes();
      })
    );
  }

}
