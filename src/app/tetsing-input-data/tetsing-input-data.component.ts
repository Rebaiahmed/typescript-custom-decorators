import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tetsing-input-data',
  templateUrl: './tetsing-input-data.component.html',
  styleUrls: ['./tetsing-input-data.component.scss'],
})
export class TetsingInputDataComponent implements OnInit {
  @Input()
  value1!: string;
  @Input()
  value2!: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value1'] && changes['value1'].currentValue) {
      console.log('value1', changes['value1'].currentValue);
      //this.makeChangesVal1(changes['value1'].currentValue);
    }
    if (changes['value2'] && changes['value2'].currentValue) {
      //this.makeChangesVal2(changes['value2'].currentValue);
      console.log('value1', changes['value2'].currentValue);
    }
  }
}
