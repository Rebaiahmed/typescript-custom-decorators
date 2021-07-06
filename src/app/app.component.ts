import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customDecoratorwith';

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    console.log(StorageService.getItem('test'));
  }
}
