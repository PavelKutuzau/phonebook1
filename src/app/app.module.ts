import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RecsComponent} from './recs/recs.component';
import {DepsComponent} from './deps/deps.component';
import {RecFormComponent} from './rec-form/rec-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecsComponent,
    DepsComponent,
    RecFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
