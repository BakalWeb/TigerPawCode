import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollHeader]',
})
export class ScrollHeaderDirective {
  @Output() smallHeader: EventEmitter<number> = new EventEmitter();

  previousValue = 0;
  scrollDir: string = undefined;

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    this.smallHeader.emit(+event.target.scrollTop);
  }
}
