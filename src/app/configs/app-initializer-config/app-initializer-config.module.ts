import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ConfigService } from './app-initializer-config.service';
import { initializeApp } from './app-initializer-config';

@NgModule({
  providers: [
    provideHttpClient(),
    ConfigService,
    {
      provide: APP_INITIALIZER,
      deps: [HttpClient, ConfigService],
      useFactory: initializeApp,
      multi: true
    }
   ],
})
export class AppInitializerConfigModule { }
