import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { JulyAppModule } from './july-module';
import { environment } from './environments/environment';
import 'zone.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(JulyAppModule);
