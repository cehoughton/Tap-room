import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
   <div class="keg-form">
    <h3>Edit keg name:</h3>
    <input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form"/>
    <select class="dropdown" [(ngModel)]="keg.howDrunk">
      <option value="| Charming Drunk" selected="selected">Charming Drunk</option>
      <option value="| Stumbling Drunk">Stumbling Drunk</option>
      <option value="| Crawling Drunk">Crawling</option>
    </select>
    <input [(ngModel)]="keg.pints" class="col-sm-8 input-lg keg-form"/>
    <hr>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
