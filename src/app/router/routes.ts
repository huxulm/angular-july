/**
 * Created by xulingming on 2017/8/28.
 */
import {Routes} from '@angular/router';
import { JulyApp, Home } from '../app';

export const ALL_ROUTES: Routes = [
  {
    path: '',
    component: JulyApp,
    children:[
      {
        path: '', component: Home
      },
      {
        path: 'button', component: Home
      }
    ]
  }
];
