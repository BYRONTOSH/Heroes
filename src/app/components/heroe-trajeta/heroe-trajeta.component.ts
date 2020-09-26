import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-trajeta',
  templateUrl: './heroe-trajeta.component.html',
  styleUrls: ['./heroe-trajeta.component.css']
})
export class HeroeTrajetaComponent implements OnInit {
  
 @Input() heroe: any 
 @Input() index: number
  constructor() { }

  ngOnInit(): void {
  }

}


