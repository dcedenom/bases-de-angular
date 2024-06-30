import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  //para recibir información del padre utilizamos el decorador @Input
  @Input() //si queremos cambiar el nombre se puede hacer dentro del input ej: @Input('otro nombre'), sino se envia nada se usa el valor por defecto ↓
  public characterList: Character[] = [{  //esto nos motrará las propiedades, sin embargo no es lo que buscamos, buscamos recibir del padre información para que se muestre en el hijo
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string>= new EventEmitter(); //debo cambiar el EventEmitter de numer a string


  onDeleteCharacter( id?: string ):void {


    if ( !id ) return;
    //console.log({id})
    this.onDelete.emit( id );
  }
}
