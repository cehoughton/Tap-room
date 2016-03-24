import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <input *ngIf="keg.full" type="checkbox" checked (click)="toggleFull(false)"/>
      <input *ngIf="!keg.full" type="checkbox" (click)="toggleFull(true)"/>
      <label>Beer name: {{ keg.name }} | Alcohol content: {{ keg.howDrunk }} | Pints left: {{ keg.pintsRemaining }}</label>
      <button (click)="subtractPint()" class="btn-success btn-sm add-button" type="submit">Sell pint</button>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
  subtractPint() {
    this.keg.pintsRemaining = this.keg.pintsRemaining -1;
  }


checkRefill() {
  if(this.keg.pintsRemaining <= 10) {
    this.keg.low = true;
    console.log("low")
  } else {
    this.keg.low = false;
  }
}

}
