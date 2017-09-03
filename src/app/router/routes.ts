/**
 * Created by xulingming on 2017/8/28.
 */
import {Routes} from '@angular/router';
import { JulyApp, Home } from '../app';
import { AutocompleteDemo } from '../autocomplete/autocomplete-demo';
import { BaseLineDemo } from '../baseline/baseline-demo';
import { ButtonDemo } from '../button/button-demo';

export const ALL_ROUTES: Routes = [
  {
    path: '',
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
      }
    ]
  }
];
