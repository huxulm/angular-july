import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JulyMaterialModule } from './july-material-module';
import { ALL_ROUTES } from './router/routes';

import { EntryApp, Home, JulyApp } from './app';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ALL_ROUTES),
    JulyMaterialModule
  ],
  declarations: [
    JulyApp,
    Home,
  ],
  providers: [
    {
      provide: OverlayContainer,
      useClass: FullscreenOverlayContainer
    }
  ],
  entryComponents: [
    JulyApp,
  ],
})
export class AppModule {
}
