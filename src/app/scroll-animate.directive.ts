import { Directive, ElementRef, HostBinding, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  @Input() animateThreshold = 0.15;

  @HostBinding('@fadeInUp') state = 'hidden';

  @HostBinding('class.scroll-visible')
  get isVisible(): boolean {
    return this.state === 'visible';
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.state = 'visible';
          this.observer?.disconnect();
        }
      },
      { threshold: this.animateThreshold }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
