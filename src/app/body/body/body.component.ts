import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar:boolean =false;
  
  sms = {
    frase :`Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry
    s standard dummy text ever since the 1500s, when an unknown printer t
    ook a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into 
    electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing 
    Lorem Ipsum passages, and more recently with desktop publishing software like
     Aldus PageMaker including versions of Lorem Ipsum.`,
     autor : 'BYRON'
  }

  heroes: string[] =['BYRON','LOARTE','GUSTAVO','CAJAMARCA']
  constructor() { }

  ngOnInit(): void {
  }

  cambio = ():boolean =>{

    if(this.mostrar===true){
      return this.mostrar =false;
    }
    else{
      return this.mostrar =true;
    }
    
  }


}
