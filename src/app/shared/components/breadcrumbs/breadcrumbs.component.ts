import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  title!: string;
  titleSubs$: Subscription;

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute
  ) {
    // de esta manera solo lo llamaria una sola vez
    // routeActivated.snapshot.children[0].data
    this.titleSubs$ = this.getDataRoute()
    .subscribe(data => {
      this.title = data['title'];
      document.title = `AdminPro - ${data['title']}`
    });
    // desestructuracion
    // .subscribe(({title}) => this.title = title);
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getDataRoute() {
    return this.router.events
    .pipe(
      filter<any>(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
      );
  }

}
