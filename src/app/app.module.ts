import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HtextComponent } from './htext/htext.component';
import { MbuttonComponent } from './mbutton/mbutton.component';
import { MaterialButtonComponent } from './material-button/material-button.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HtextComponent,
    MbuttonComponent,
    MaterialButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const htext = createCustomElement(HtextComponent, { injector });
    const mbutton = createCustomElement(MbuttonComponent, { injector });
    const materialButton = createCustomElement(MaterialButtonComponent, { injector });

    customElements.define('app-htext', htext);
    customElements.define('app-mbutton', mbutton);
    customElements.define('app-material-button', materialButton);
  }
  ngDoBootstrap() {}
}
