import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //la mejor manera de trabajarlo es con variable ej: public: variable string
  public title: string = 'Hola Mundo';
  // public counter: number = 10;

  // increaseBy( value: number ):void {
  //   //this.counter = this.counter + 1;
  //   //this.counter += 1;
  //   this.counter += value;
  // }

  // decreaseBy( value: number ):void {
  //   //this.counter = this.counter - 1;
  //   //this.counter -= 1; //forma sin el value
  //   this.counter -= value;
  // }

  // ResetCounter( value: number): void{
  //   this.counter = 10;
  // }
}
