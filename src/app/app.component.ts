import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string ='Byron Loarte';
  arregloNumeros: number[] =[1,2,3,4,5,6,7,8,9,10];
  PI:number= Math.PI
  porcentaje: number = 0.234456
  salario:number=12345.678
  movil = {
    Marca:"Alcatel",
    Peso:"5 onzas", 
    pantalla: "5 pulgadas", 
    Color:"Negro",
    proveedor:{
      direccion:"quitumbe",
      casa:53
    }
  };
  promersaNueva =new Promise <string>((resolv)=>{
    setTimeout(()=>{
      resolv ("LLEGO LA INFORMACIÓN");
    },4500)
  })
  fecha = new Date();
  idioma:string=''
  cambioIdioma(dato:string){
    dato==='es' ? this.idioma='es' : this.idioma='en'
  }
  nombreDos:string ='ByRON lOarTe GusTAVo CajAmArCa'
  urlVideo:string ='https://www.youtube.com/embed/6DaL-Z4dwzI'
  passwordUsuario: string ='sistemas'
  estado:boolean=false
  
}
