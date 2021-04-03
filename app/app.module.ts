import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PrettyJsonModule} from 'angular2-prettyjson';

import { AppComponent } from './app.component';
import { FormatterComponent } from './formatter/formatter.component';

@NgModule({
  imports:      [ BrowserModule, PrettyJsonModule ],
  declarations: [ AppComponent, FormatterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
