import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { AwesomeTooltipComponent } from './tooltip.component';

@Directive({ selector: '[awesomeTooltip]' })
export class AwesomeTooltipDirective implements OnInit {

  @Input('awesomeTooltip') text = '';
  @Input('tooltipimage') tooltipimage = '';
  @Input('tooltipDesc') text2 = '';
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -8,
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseover')
  show() {
    const tooltipRef: ComponentRef<AwesomeTooltipComponent>
      = this.overlayRef.attach(new ComponentPortal(AwesomeTooltipComponent));
    tooltipRef.instance.text = this.text;
    tooltipRef.instance.text2 = this.text2;
    tooltipRef.instance.tooltipimage = this.tooltipimage;
  }

  @HostListener('mouseout')
  hide() {
    this.closeToolTip();
  }

  ngOnDestroy() {
    this.closeToolTip();
  }
  private closeToolTip() {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
