import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'awesome-tooltip',
  styleUrls: ['./tooltip.component.scss'],
  templateUrl: './tooltip.component.html',
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0}),
        animate(100, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(100, style({ opacity: 0 })),
        
      ]),
      
    ]),
  ],
})
export class AwesomeTooltipComponent {

  @Input() tooltipimage=''
  @Input() text = '';
  @Input() text2 = '';
}

