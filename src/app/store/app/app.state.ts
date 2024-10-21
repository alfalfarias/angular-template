import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { AppStateModel } from './app.models';
import { DEFAULT_TITLE } from './app.constants';
import { SetTitleAction } from './app.actions';

const initialState: AppStateModel = {
  title: DEFAULT_TITLE,
};

@State<AppStateModel>({
  name: 'app',
  defaults: initialState,
})
@Injectable()
export class AppState {
  constructor() {}

  @Action(SetTitleAction)
  setTitleAction(
    { getState, patchState }: StateContext<AppStateModel>,
    { title }: SetTitleAction
  ): void {
    const state: AppStateModel = getState();
    patchState({ ...state, title });
  }
}
