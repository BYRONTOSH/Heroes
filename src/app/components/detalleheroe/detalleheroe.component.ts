import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-detalleheroe',
  templateUrl: './detalleheroe.component.html',
  styleUrls: ['./detalleheroe.component.css']
})
export class DetalleheroeComponent implements OnInit {

  url ;
  heroes =[]
  constructor(private router: ActivatedRoute, private hs: HeroesService) { }

  ngOnInit(): void {

    this.router.params.subscribe((r) => {
      this.url = r['detalle'];
      this.heroes=[]
    this.hs.buscarHeroe().subscribe((r)=>{
      for (let i=0; i<=6 ;i++){
      if(r[i].nombre.toUpperCase()===this.url.toUpperCase()){
        this.heroes.push(r[i])
        
      }
     }
    })
  });
  }


}
