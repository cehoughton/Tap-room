import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3>Create Keg:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <button (click)="addKeg(newName)">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newBeerName: HTMLInputElement){
    this.onSubmitNewKeg.emit(newBeerName.value);
    console.log(newBeerName.value);
    newBeerName.value = "";
  }
}
