/**
 * Created by xulingming on 2017/9/14.
 */
import { Routes } from '@angular/router';
import { ListDemo, PlainListDemo, GridListDemo, ExpansionPanelDemo } from './list-demo';

export const LIST_DEMO_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'plain-list',
  },
  {
    path: 'plain-list',
    component: PlainListDemo,
  },
  {
    path: 'grid-list',
    component: GridListDemo,
  },
  {
    path: 'expansion-panel',
    component: ExpansionPanelDemo,
  }
];
