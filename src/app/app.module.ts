import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {appRoutes} from './app.routes';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {RouterModule} from "@angular/router";
import {CalculatorModule} from "./calculator/calculator.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
