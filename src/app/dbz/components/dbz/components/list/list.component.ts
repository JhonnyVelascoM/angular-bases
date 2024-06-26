import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',

    templateUrl: './list.component.html',
    styleUrl: './list.component.css',

})
export class ListComponent {
  @Input()
  public characterList: Character[]=[
    {
      name: 'Trunks',
      power: 90
    }
  ];

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();
  //public onDelete = new EventEmitter<number>(); //es lo mismo que la linea de arriba

  onDeleteCharacter(id?: string):void{
    //emitir el ID del personaje
    if (!id) return;{


    }
    this.onDelete.emit(id);
  }
 }
