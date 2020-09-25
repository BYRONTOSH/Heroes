import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body/body.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'body', component: BodyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroes/heroe/:id', component: HeroeComponent },
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
