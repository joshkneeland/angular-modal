import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './components/demo/demo.component';
import { ApiComponent } from './components/api/api.component';
import { SpecComponent } from './components/spec/spec.component';
import { AccessibilityComponent } from './components/accessibility/accessibility.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ApiComponent,
    SpecComponent,
    AccessibilityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
