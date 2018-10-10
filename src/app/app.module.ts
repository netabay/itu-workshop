import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
// @ts-ignore
import {BackgroundComponent} from 'background';
import {TitleComponent} from './title/title.component';
import {CardComponent} from "./card/card.component";

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    TitleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
