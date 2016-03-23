import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  template: `
  <h3 *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)"> {{ currentKeg.name }}
  </h3>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("child", clickedKeg);
    this.onKegSelect.emit(clickedKeg);
  }
}

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Keg List</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("PBR", 0),
      new Keg("Bud", 1),
      new Keg("Ninkasi", 2)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log("parent", clickedKeg);
  }
}
export class Keg {
  public done: boolean = false;
  constructor(public name: string, public id: number) {

  }
}
