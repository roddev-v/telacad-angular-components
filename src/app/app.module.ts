import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManualComponent } from './components/manual/manual.component';
import { GeneratedComponent } from './components/generated/generated.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    GeneratedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
