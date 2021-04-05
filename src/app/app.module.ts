import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RecsComponent} from './recs/recs.component';
import {DepsComponent} from './deps/deps.component';

@NgModule({
  declarations: [
    AppComponent,
    RecsComponent,
    DepsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
