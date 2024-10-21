import { NgxsModule, Store } from "@ngxs/store";
import { TestBed } from '@angular/core/testing';
import { AppStateModel, TitleType } from "./app.models";
import { AppState } from "./app.state";
import { AppSelector } from "./app.selectors";

const STATE: AppStateModel = {
  title: TitleType.HOME_TITLE
};

describe('App selectors', () => {
  let store: Store;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppState])],
    }).compileComponents();

    store = TestBed.get(Store);
    store.reset(STATE);
  });

  it('SUCCESS | should select state', () => {
    const value = AppSelector.state(STATE);
    expect(value).toEqual(STATE);
  });
});
