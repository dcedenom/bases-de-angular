// import { Component } from "@angular/core";

// //el component que es un decorador debe tener definido un tamplate que espera definiciones dentro de un string y un selector
// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter</h1>'

// })

// //debemos exportar el componente al modulo en este caso solo tenemos un modulo el app.module.ts
// export class CounterComponent{

// }

//usando snipets ↓

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `                  <!--el backtick nos permite trabajar el template multilinea-->
  <h3>Counter: {{ counter }}</h3>

  <!--<button (click)="increaseBy()">+1</button>--><!--forma sin el value-->
  <!--<button (click)="decreaseBy()">-1</button>-->
  <button (click)="increaseBy(1)">+1</button> <!--dentro del increaseBy ingresamos la cantidad-->
  <button (click)="ResetCounter(10)">Reset</button>
  <button (click)="decreaseBy(1)">-1</button>

<hr>
  `
})

export class CounterComponent  {
    //la mejor manera de trabajarlo es con variable ej: public: variable string
    public counter: number = 10;

    increaseBy( value: number ):void {
      //this.counter = this.counter + 1;
      //this.counter += 1;
      this.counter += value;
    }

    decreaseBy( value: number ):void {
      //this.counter = this.counter - 1;
      //this.counter -= 1; //forma sin el value
      this.counter -= value;
    }

    ResetCounter( value: number): void{
      this.counter = 10;
    }
}
