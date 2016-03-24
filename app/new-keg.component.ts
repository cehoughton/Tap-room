import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3>Create Keg:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <select class="dropdown" #userHowDrunk>
        <option value="Charming Drunk" selected="selected">Charming Drunk</option>
        <option value="Stumbling Drunk">Stumbling Drunk</option>
        <option value="Crawling Drunk">Crawling Drunk</option>
      </select>
      <input placeholder="Pints" class="col-sm-8 input-lg" #newPints>
      <button (click)="addKeg(newName, userHowDrunk, newPints)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newBeerName: HTMLInputElement, userHowDrunk: HTMLSelectElement, newPints: HTMLInputElement){
    var values = [newBeerName.value, userHowDrunk.value, newPints.value];
    this.onSubmitNewKeg.emit(values);
    console.log(values);
    userHowDrunk.value = "";
    newBeerName.value = "";
    newPints.value = "";
  }
}
