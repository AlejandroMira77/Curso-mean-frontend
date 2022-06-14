import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    { 
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          url: '/dashboard'
        },
        {
          title: 'Gráficas',
          url: '/dashboard/graph1'
        },
        {
          title: 'Rxjs',
          url: '/dashboard/rxjs'
        },
        {
          title: 'Promesas',
          url: '/dashboard/promise'
        },
        {
          title: 'ProgressBar',
          url: '/dashboard/progress'
        }
      ]
    }
  ];

  constructor() { }
}
