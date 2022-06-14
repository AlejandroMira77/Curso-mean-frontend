import { Component } from '@angular/core';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component {

  titleSales: string = 'Ventas';
  titleIncomes: string = 'Ingresos';

  labelSales: string[] = [ 'Ventas 1', 'Ventas 2', 'Ventas 3' ];
  labelIncomes: string[] = [ 'Ingresos 1', 'Ingresos 2', 'Ingresos 3' ];
  dataSales: number[] = [ 310, 400, 130 ];
  backgroundColorSales: string[] = ['#60F558', '#CA31F5', '#FA267A'] 

}
