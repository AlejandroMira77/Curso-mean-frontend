import { Component, Input, SimpleChanges  } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input('titleDonut') title: string = 'sin título';
  @Input('labelDonut') labelsDonuts: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input('dataDonut') data: number[] = [ 350, 450, 100 ];
  @Input('backColorDonut') backgroundColor: string[] = ['#6857E6', '#009FEE', '#F02059'];
  
  doughnutChartLabels = this.labelsDonuts;
  doughnutChartData: ChartData<'doughnut'> = this.donutContent();

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartLabels = this.labelsDonuts;
    this.doughnutChartData = this.donutContent();
  }

  donutContent() {
    return {
    labels: this.doughnutChartLabels,
    datasets: [ 
      {
        data: this.data,
        backgroundColor: this.backgroundColor
      }
    ]}
  }

}
