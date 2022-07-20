import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-matcheckall',
  templateUrl: './matcheckall.component.html',
  styleUrls: ['./matcheckall.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatcheckallComponent{

  @Input() model: FormControl;
  @Input() values = [];
  @Input() text = 'Select All'; 

  isChecked(): boolean {
    return this.model.value && this.values.length
      && this.model.value.length === this.values.length;
  }

  isIndeterminate(): boolean {
    return this.model.value && this.values.length && this.model.value.length
      && this.model.value.length < this.values.length;
  }

  toggleSelection(change: MatCheckboxChange): void {
    if (change.checked) {
      this.model.setValue(this.values);
    } else {
      this.model.setValue([]);
    }
  }

}
