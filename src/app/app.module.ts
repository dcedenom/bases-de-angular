import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent, //aqui importamos los componetes que vamos a utilizar
  ],
  imports: [
    BrowserModule,
    CounterModule, //aunque parezca que no nos ahorramos lineas de código lo cierto es que conforme crezcan los componentes se iran agrupando en este modulo y viviran  solo en el no tenemos que estar llamandolo al app.module.ts
    HeroesModule,
    DbzModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
