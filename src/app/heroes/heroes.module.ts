import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule //en el app.module el commonModule ya viene incluido por defecto pero al encapsularlo si se requiere el llamado en el modulo donde se necesite (ver directivas ngif en guias de atajos)
  ],

})
export class HeroesModule { }
