import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
//console.log(v4());
//console.log(uuid());
import { Character } from '../interfaces/character.interface';


@Injectable({ //este decorador en particular le va a decir a angular que es y o trate como un servicio
  providedIn: 'root'  //introducido en la version 6, sino trabajmos con el tendriamos que definir el servicio en la parte de los providers, algo sumamente extraño
})
export class DbzService {

  // este código hasta onDeleteCharacter se paso a dbz.services.ts ya que no es conveniente o no debería estar en el main-page.component
  //el objetivo es manejar la logica de negocio desde los servicios
  public characters: Character[]= [{

    id: uuid(),
    name: 'Krillin',
    power: 1000
    },{
    id: uuid(),
    name: 'Goku',
    power: 9500
    },{
    id: uuid(), //el problema es uqe al agregar un nuevo elemento al hacer el id opcional no lo agrega por lo que tenemos que realizar algunos cambios ↓
    name: 'Vegueta',
    power: 7500
    }];

    //aqui en el componente padre defino que quiero hacer cunado se escuche un evento en este caso un nuevo personaje
     addCharacter( character: Character):void{

      // const newCharacter: Character = {
      //   id: uuid(),
      //   name: character.name,
      //   power: character.power
      // }
      //en vez de utilizar de esta manera las propiedades y desetructurar vamos a utilizar otra forma
      //utilizamos el operador spread y le decibos a angular que tome todas las propiedades y las esparsalas en el nuevo objeto que estoy creando
      const newCharacter: Character = { id:uuid(), ...character }; //tecnicamente deberia ir primero el spread y despues lo que quiero que venga

    // console.log('MainPage');
    // console.log(character);
    //unshift añade un nuevo elemento al principio del arreglo
       this.characters.push(newCharacter);//cambiamos de character a crear un new character para incluir un id
    //hasta aqui ya podemos agreagar a la lista, pero una vez echo esto si recargamos el navegador todo se borra, podemos hacer que la información sea persistente , tenemos mas o menos 10 mb en el navegador, buscar información acerca de eso
    }

    // onDeleteCharacter(index:number):void{
    // this.characters.splice(index, 1); //debemos indicar cuantos queremos borrar, sino se borrará todo
    deleteCharacterById (id:string) {
      this.characters = this.characters.filter( character => character.id !== id);
    }

}










