import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: []
})
export class RxjsComponent {

  constructor() {

    this.returnObservable().pipe(
      // si da un error el observable vuelve a intentar n veces 
      retry(2)
    ).subscribe(
      value => console.log(value),
      error => console.warn(error),
      () => console.info('Terminado')
    );
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

}
