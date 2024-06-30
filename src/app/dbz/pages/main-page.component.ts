import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // este código hasta onDeleteCharacter se paso a dbz.services.ts ya que no es conveniente o no debería estar en el main-page.component
  // public characters: Character[]= [{

  // name: 'Krillin',
  // power: 1000
  // },{
  // name: 'Goku',
  // power: 9500
  // },{
  // name: 'Vegueta',
  // power: 7500
  // }];

  //aqui en el componente padre defino que quiero hacer cunado se escuche un evento en este caso un nuevo personaje
  //  onNewCharacter( character: Character):void{
  // console.log('MainPage');
  // console.log(character);
  //unshift añade un nuevo elemento al principio del arreglo
    //  this.characters.push(character);
  //hasta aqui ya podemos agreagar a la lista, pero una vez echo esto si recargamos el navegador todo se borra, podemos hacer que la información sea persistente , tenemos mas o menos 10 mb en el navegador, buscar información acerca de eso
  // }

  // onDeleteCharacter(index:number):void{
  // this.characters.splice(index, 1); //debemos indicar cuantos queremos borrar, sino se borrará todo
  // }

    //esto quebrara el código por lo que debemos hacer uso de un elemento de angular que se llama inyección de dependencias
    //↓ esto es inyección de dependencias
    // constructor( public dbzService: DbzService ) {

    // }

    //poniendo nuestro servicio privado
    constructor( private dbzService: DbzService ) {}
     //para resolver el problema de accesibilidad podemos utilizar getter
     get characters(): Character[] {
        return [...this.dbzService.characters];
     }

     //cuando elimine un personaje lo voy a hacer mediante el id

     onDeleteCharacter ( id: string):void {
      this.dbzService.deleteCharacterById( id )
     }

     onNewCharacter ( character: Character):void {
      this.dbzService.addCharacter( character );
     }
}


