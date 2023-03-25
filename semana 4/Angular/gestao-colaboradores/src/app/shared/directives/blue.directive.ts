import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective {

  constructor(elementRef: ElementRef) {
    console.log(elementRef);
    elementRef.nativeElement.style.color = 'blue';
  }

}
