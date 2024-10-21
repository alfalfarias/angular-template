import { Selector } from '@ngxs/store';
import { AppState } from './app.state';
import { AppStateModel } from './app.models';

export class AppSelector {
  @Selector([AppState])
  static state(state: AppStateModel): AppStateModel {
    return state;
  }

  @Selector([AppState])
  static titleState(state: AppStateModel): string {
    return state.title;
  }
}
