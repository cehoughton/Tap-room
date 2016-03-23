import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { FullPipe } from './full.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [FullPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="full">Show Full</option>
    <option value="notFull" selected="selected">Show Not Full</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | full:filterFull"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterFull: string = "notFull";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("child", clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(name: string): void {
    this.kegList.push(
      new Keg(name, this.kegList.length)
    );
  }
  onChange(filterOption) {
    this.filterFull = filterOption;
    console.log(this.filterFull);
  }
}
