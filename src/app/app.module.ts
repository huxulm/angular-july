import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JulyMaterialModule } from './july-material-module';
import { ALL_ROUTES } from './router/routes';

import { EntryApp, Home, JulyApp } from './app';
import { AutocompleteDemo } from './autocomplete/autocomplete-demo';
import { BaseLineDemo } from './baseline/baseline-demo';
import { ButtonDemo } from './button/button-demo';
import { ButtonToggleDemo } from './button-toggle/button-toogle-demo';
import { RippleDemo } from './ripple/ripple-demo';
import { TabsDemo, SunnyTabDemo, RainyTabDemo, FoggyTabDemo } from './tabs/tabs-demo';
import { TableDemo } from './table/table-demo';
import { ListDemo, GridListDemo, PlainListDemo, ExpansionPanelDemo } from './list/list-demo';

import { PeopleDatabase } from './table/people-database';

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
    AutocompleteDemo,
    BaseLineDemo,
    ButtonDemo,
    ButtonToggleDemo,
    RippleDemo,
    TabsDemo,
    SunnyTabDemo,
    RainyTabDemo,
    FoggyTabDemo,
    TableDemo,
    ListDemo,
    PlainListDemo,
    GridListDemo,
    ExpansionPanelDemo,
  ],
  providers: [
    {
      provide: OverlayContainer,
      useClass: FullscreenOverlayContainer,
    },
    PeopleDatabase
  ],
  entryComponents: [
    JulyApp,
  ],
})
export class AppModule {
}
