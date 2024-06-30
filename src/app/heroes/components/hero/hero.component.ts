import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

   public name:string = 'Ironman';
   public age: number = 45;

   get capitalizedName():string {
    return this.name.toUpperCase(); //los getters se ven como si fueran propiedades
   }

   //metodo
   public getHeroDescription():string { //si utilizamos private no podemos utilizarlo fuera de la clase xq el decorador @component se encuentra fuera de la clase y el htl nos dara un error
    return `${ this.name } - ${ this.age }`;
   }

   //tarea cambiar nombre y edad

   changeHero():void{
   this.name  = 'Spiderman';
   }

   changeAge():void{
    this.age = 25;
   }

   resetForm():void {
    this.name = 'Ironman';
    this.age = 45;

    //solo cambia 1
    // document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    //}); //las expresiones de angular quedan por fuera del ciclo de detección de angualar por eso si las usamos tal cual muchas veces nos presentara problemas
   }

}
