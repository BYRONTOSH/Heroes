import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes
  constructor(private hs:HeroesService) { }

  ngOnInit(): void {

      this.hs.listarHeroes().subscribe((r)=>{
        this.heroes=r
      })

  }

}
