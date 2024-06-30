import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  public deleteHero?: string; //creamos la propiedad de clase

  removeLastHero():void{//esto solo va a estar en el scope por lo que debemos crearlo como una propiedad de clase
    this.deleteHero = this.heroNames.pop();//pop remueve el ultimo valor y lo regresa, por lo que regresa un string o undefine que podemos aprovechar
    //const deleteHero = this.heroNames.pop();//pop remueve el ultimo valor y lo regresa, por lo que regresa un string o undefine que podemos aprovechar
    //console.log({deleteHero});
  }



}
