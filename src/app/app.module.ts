import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HtextComponent } from './htext/htext.component';
import { MbuttonComponent } from './mbutton/mbutton.component';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { MultipleSectionCardComponent } from './multiple-section-card/multiple-section-card.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HtextComponent,
    MbuttonComponent,
    MaterialButtonComponent,
    MultipleSectionCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const htext = createCustomElement(HtextComponent, { injector });
    const mbutton = createCustomElement(MbuttonComponent, { injector });
    const materialButton = createCustomElement(MaterialButtonComponent, { injector });
    const cardWithMultipleSections = createCustomElement(MultipleSectionCardComponent, { injector });

    customElements.define('app-htext', htext);
    customElements.define('app-mbutton', mbutton);
    customElements.define('app-material-button', materialButton);
    customElements.define('app-multiple-section-card', cardWithMultipleSections);
  }
  ngDoBootstrap() {}
}
