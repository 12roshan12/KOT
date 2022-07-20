import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numd'
})
export class NumdPipe implements PipeTransform {
  belowZero = false;

  transform(value: number): string {
    const D = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    let out = '';
    if (value) {
      if (value < 0) {
        this.belowZero = true;
      }
      const stringNum = Math.abs(value).toString();
      for (let i = 0; i < stringNum.length; i++) {
        out += D[+stringNum.charAt(i)];
      }
    }
    if (this.belowZero) {
      return '(' + this.formatNumber(out) + ')';
    } else {
      return this.formatNumber(out);
    }
  }

  formatNumber(str: string): string {
    const array = str.split('');
    let index = -3;
    while (array.length + index > 0) {
        array.splice(index, 0, ',');
        // Decrement by 4 since we just added another unit to the array.
        index -= 4;
    }
    return array.join('');
  }

}


