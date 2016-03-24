import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <input *ngIf="keg.full" type="checkbox" checked (click)="toggleFull(false)"/>
      <input *ngIf="!keg.full" type="checkbox" (click)="toggleFull(true)"/>
      <label>Beer name: {{ keg.name }} | Alcohol content: {{ keg.howDrunk }} | Pints left: {{ keg.pints }}</label>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
  toggleFull(setState: boolean){
    this.keg.full = setState;
  }
}
