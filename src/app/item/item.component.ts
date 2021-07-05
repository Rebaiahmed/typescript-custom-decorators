import { Component, OnInit } from '@angular/core';
import { Confirmable } from '../decorators/confirmable.decorator';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Confirmable
  deleteItem(): void {
    console.log('An item was deleted');
  }
}
