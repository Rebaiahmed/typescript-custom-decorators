import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ItemComponent } from './item/item.component';
import { MemoziationExampleComponent } from './memoziation-example/memoziation-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ItemComponent,
    MemoziationExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
