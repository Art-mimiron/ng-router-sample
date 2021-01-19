import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero, HeroService } from '../heroes-service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(private route: ActivatedRoute, private router: Router, private service: HeroService) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
    );
  }

  goToHeroList(hero: Hero) {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['heroes-list', {id: heroId}])
  }

}
