import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ConfigService } from './app-initializer-config.service';
import { firstValueFrom, tap } from 'rxjs';

export function initializeApp(http: HttpClient, configService: ConfigService) {
  return async (): Promise<void> => {
    console.log('APP_INITIALIZER -> Loading');
    const response = await firstValueFrom(configService.loadConfig())
    console.log('APP_INITIALIZER -> ', response);
  }
}

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
