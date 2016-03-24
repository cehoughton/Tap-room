import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

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
      new Keg("PBR", "Charming Drunk", 124, 0),
      new Keg("Bud", "Charming Drunk", 124, 1),
      new Keg("Ninkasi IPA", "Stumbling Drunk", 124, 2),
      new Keg("Imperial Stout", "Crawling Drunk", 124, 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log("parent", clickedKeg);
  }
}
