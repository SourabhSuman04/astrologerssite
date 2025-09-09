import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // ✅ now valid
        anchorScrolling: 'enabled'
      }),
    withViewTransitions()), provideHttpClient()]
};
