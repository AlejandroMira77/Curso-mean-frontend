import { Component, OnDestroy } from '@angular/core';
import { interval, map, Observable, retry, take, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: []
})
export class RxjsComponent implements OnDestroy {

  intervalSubs: Subscription;

  constructor() {

    this.intervalSubs = this.returnIntervalo().subscribe(console.log);

    // this.returnObservable().pipe(
    //   // si da un error el observable vuelve a intentar n veces 
    //   retry(2)
    // este dice cuantas emisiones quiero del observable
    //   take(4)
    // ).subscribe(
    //   value => console.log(value),
    //   error => console.warn(error),
    //   () => console.info('Terminado')
    // );
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnObservable(): Observable<number> {
    let num = 0;
    return new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        num++;
        observer.next(num);
        if (num === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000);
    });
  }

  returnIntervalo(): Observable<number> {
    return interval(500)
           .pipe(
             map(value => value + 1),
             filter(value => (value % 2 === 0) ? true : false),
             take(10)
           );
  }

}
