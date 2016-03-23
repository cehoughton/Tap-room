import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
   name: "full",
   pure: false
})
export class FullPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredKegState = args[0];
    if(desiredKegState === "full") {
      return input.filter(function(keg) {
        return keg.full;
      });
    } else if (desiredKegState === "notFull") {
      return input.filter((keg) => {
        return !keg.full;
      });
    } else {
      return input;
    }

  }
}
