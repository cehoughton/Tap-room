import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `

      <div class="keg-green">
      <p>keg.component.ts</p>
      <label>Beer name: {{ keg.name }} | Alcohol content: {{ keg.howDrunk }} | Pints left: {{ keg.pintsRemaining }}</label>
      <button (click)="subtractPint()" class="btn-success btn-sm add-button" type="submit">Sell pint</button>
      <button (click)="refillKeg()" class="btn-success btn-sm add-button" type="submit">Refill Keg!</button>
      </div>

  `
})
export class KegComponent {
  public keg: Keg;
  subtractPint() {
    this.keg.pintsRemaining = this.keg.pintsRemaining -1;
    this.checkRefill()
  }


checkRefill() {
  if(this.keg.pintsRemaining >= 10) {
    this.keg.low = false;
    console.log("low")
  } else {
    this.keg.low = true;
  }
}
refillKeg() {
  this.keg.pintsRemaining = 124
}
}
