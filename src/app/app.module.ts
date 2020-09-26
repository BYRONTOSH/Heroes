import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,LOCALE_ID} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/es';
import { PipespersonalizadosPipe } from './pipes/pipespersonalizados.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContraseniaPipe } from './pipes/contrasenia.pipe';
registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    PipespersonalizadosPipe,
    DomseguroPipe,
    ContraseniaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
