import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { AppRoutingModule } from './app-routing.module';
// Hinweise zur nächsten Zeile: https://www.npmjs.com/package/angular-resize-event
import { AngularResizedEventModule } from 'angular-resize-event';
import { Globals } from './globals';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularResizedEventModule,
    AppRoutingModule
  ],
  providers: [Globals, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
