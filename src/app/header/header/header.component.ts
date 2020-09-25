import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
     
  }

  buscador(dato:string){
  }
  
  limpiar(){
   (document.getElementById("busqueda") as HTMLInputElement).value="";
  }
}
