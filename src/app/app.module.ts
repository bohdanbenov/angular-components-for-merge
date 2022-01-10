import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HtextComponent } from './htext/htext.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    HtextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, HtextComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(HtextComponent, { injector });
    customElements.define('app-htext', el);
  }
  ngDoBootstrap() {}
}
