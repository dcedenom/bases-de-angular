import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  //realizar una emision al padre. Se requiere el componente @output
  @Output() //con esto ya tengo el poder de emitir la propiedad que requiero
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{

    //debugger;

    //console.log(this.character);
    if (this.character.name.length === 0) return; //no vamos a permitir un personaje sin nombre, sin poder seria 0 pero no sin nombre

    this.onNewCharacter.emit({...this.character}); //debemos emitir algo de tipo character / ver main-page.component.html

    // this.character.name = '';
    // this.character.power = 0;

    //simplificar lineas
    this.character = {name: '', power:0 };
  }
}
