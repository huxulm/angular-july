import {ApplicationRef, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ALL_ROUTES} from './app/router/routes';
import {EntryApp} from './app/app';
import {AppModule} from './app/app.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppModule,
    RouterModule.forRoot(ALL_ROUTES),
  ],
  declarations: [
    EntryApp,
  ],
  entryComponents: [
    EntryApp,
  ],
  bootstrap: [
    EntryApp
  ]
})
export class JulyAppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(EntryApp);
  }
}

