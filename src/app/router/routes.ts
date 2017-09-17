/**
 * Created by xulingming on 2017/8/28.
 */
import {Routes} from '@angular/router';
import { JulyApp, Home } from '../app';
import { AutocompleteDemo } from '../autocomplete/autocomplete-demo';
import { BaseLineDemo } from '../baseline/baseline-demo';
import { ButtonDemo } from '../button/button-demo';
import { ButtonToggleDemo } from '../button-toggle/button-toogle-demo';
import { RippleDemo } from '../ripple/ripple-demo';
import { TabsDemo } from '../tabs/tabs-demo';
import { TableDemo } from '../table/table-demo';
import { ListDemo } from '../list/list-demo';
import { MenuDemo } from '../menu/menu-demo';

import { TABS_DEMO_ROUTES } from '../tabs/routes';
import { LIST_DEMO_ROUTES } from '../list/routes';

export const ALL_ROUTES: Routes = [
  {
    path: 'angular-july',
    component: JulyApp,
    children:[
      {
        path: '', component: Home
      },
      {
        path: 'button', component: ButtonDemo
      },
      {
        path: 'autocomplete', component: AutocompleteDemo
      },
      {
        path: 'baseline', component: BaseLineDemo
      },
      {
        path: 'button-toggle', component: ButtonToggleDemo
      },
      {
        path: 'ripple', component: RippleDemo
      },
      {
        path: 'tabs', component: TabsDemo, children: TABS_DEMO_ROUTES
      },
      {
        path: 'table', component: TableDemo,
      },
      {
        path: 'list', component: ListDemo, children: LIST_DEMO_ROUTES
      },
      {
        path: 'menu', component: MenuDemo,
      }
    ]
  }
];
