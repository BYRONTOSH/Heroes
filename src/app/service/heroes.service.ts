import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  URL:string ='https://byrontosh.github.io/Heroes/';

  constructor(private http: HttpClient) { }

  listarHeroes(){
    return this.http.get(this.URL)
  }

  listarHeroe(){
    return this.http.get(this.URL)
  }
}
