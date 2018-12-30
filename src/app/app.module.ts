import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAutocompletePipe } from './ngx-autocomplete/ngx-autocomplete.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NgxAutocompletePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    NgxAutocompletePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
