import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ItemComponent } from './item/item.component';
import { MemoziationExampleComponent } from './memoziation-example/memoziation-example.component';
import { CacheableComponent } from './cacheable/cacheable.component';
import { TetsingInputDataComponent } from './tetsing-input-data/tetsing-input-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ItemComponent,
    MemoziationExampleComponent,
    CacheableComponent,
    TetsingInputDataComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
