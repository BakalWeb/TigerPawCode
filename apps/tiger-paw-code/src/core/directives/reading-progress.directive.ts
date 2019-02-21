import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appReadingProgress]'
})
export class ReadingProgressDirective {
  @Output() smallHeader: EventEmitter<number> = new EventEmitter();

  previousValue = 0;
  scrollDir: string = undefined;

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    console.log(event);
    // this.smallHeader.emit(+event.target.scrollTop);
  }
}
