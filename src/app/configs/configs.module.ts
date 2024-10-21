import { NgModule } from '@angular/core';
import { AppInitializerConfigModule } from './app-initializer-config/app-initializer-config.module';
import { ReduxConfigModule } from './redux-config/redux-config.module';

@NgModule({
  imports: [
    AppInitializerConfigModule,
    ReduxConfigModule
  ]
})
export class ConfigsModule { }
