import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit {

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valueProgress') progress: number = 30;
  @Input() btnClass: string = 'btn-primary'; 
  @Output() ouputValue: EventEmitter<number> = new EventEmitter();

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.ouputValue.emit(100);
      return this.progress = 100;
    }
    if (this.progress <= 0 && value < 0) {
      this.ouputValue.emit(0);
      return this.progress = 0;
    }
    this.ouputValue.emit(this.progress+value);
    return this.progress = this.progress + value;
  }

  onChange(event: any) {
    if (event >= 100) {
      this.progress = 100;
    } else if (event <= 0) {
      this.progress = 0;
    } else {
      this.progress = event;
    }
    this.ouputValue.emit(this.progress);
  }

}
