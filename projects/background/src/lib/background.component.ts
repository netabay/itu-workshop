import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {defer, interval, of, ReplaySubject} from "rxjs";
import {delay, map, takeUntil, takeWhile} from "rxjs/operators";
import {animationFrame} from "rxjs/internal/scheduler/animationFrame";

/*
* Credit goes to Ben Lesh inspired from the slides found at.
* https://www.slideshare.net/benlesh1/advanced-rxjs-animations
* */

@Component({
  selector: 'itu-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, OnDestroy {

  @ViewChild('ship') ship: ElementRef;
  @ViewChild('shipTwo') shipTwo: ElementRef;

  private _kill$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnDestroy() {
    this._kill$.next(true);
    this._kill$.complete();
  }

  ngOnInit() {
    of({
        element: this.ship.nativeElement,
        duration: 80000,
        distance: 1650,
        delay: 2000,
        loop: true,
        y: 0, x: -150
      },
      {
        element: this.shipTwo.nativeElement,
        duration: 80000,
        delay: 512,
        distance: 1750,
        loop: true,
        y: 10, x: -450
      }).subscribe((x) => {
      this.animateElement(x);
    });
  }

  animateElement(aniElement) {
    const msElapsed = (scheduler = animationFrame) => {
      return defer(() => {
        const start = scheduler.now();
        return interval(0, scheduler).pipe(
          map(() => scheduler.now() - start)
        );
      })
    };

    const duration = (ms, scheduler = animationFrame) =>
      msElapsed(scheduler).pipe(
        map(ems => ems / ms),
        takeWhile(t => t <= 1)
      );

    const distance = (d) => (t) => t * d;

    duration(aniElement.duration).pipe(
      map(distance(aniElement.distance)),
      delay(new Date(Date.now() + aniElement.delay)),
      takeUntil(this._kill$)
    ).subscribe((frame) => {
        aniElement.element.setAttribute(
          'style',
          `opacity:1; transform:translate(${aniElement.x + frame}px,
                        ${aniElement.y}px) `);
      }, (error) => {
        console.log('error', error);
      },
      () => {
        if (aniElement.loop) {
          this.animateElement(aniElement);
        }

      });

  }
}
