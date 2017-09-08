/**
 * Created by xulingming on 2017/9/8.
 */
import { Routes } from '@angular/router';

import { SunnyTabDemo, RainyTabDemo, FoggyTabDemo } from './tabs-demo';

export const TABS_DEMO_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sunny-tab'
  },
  {
    path: 'sunny-tab',
    component: SunnyTabDemo,
  },
  {
    path: 'rainy-tab',
    pathMatch: 'full',
    component: RainyTabDemo,
  },
  {
    path: 'foggy-tab',
    component: FoggyTabDemo,
  },
];

