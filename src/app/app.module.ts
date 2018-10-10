import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {BackgroundComponent} from "../../projects/background/src/lib/background.component";
import {TitleComponent} from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
