import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroes;
  url;
  heroe = [];
  constructor(private router: ActivatedRoute, private hs: HeroesService) {}

  ngOnInit() {
    this.router.params.subscribe((r) => {
      this.url = r.id;
    });

    this.hs.listarHeroe().subscribe((r) => {
      this.heroes = r;
      this.heroe.push(this.heroes[this.url]);
    });


  

  }

  
}
