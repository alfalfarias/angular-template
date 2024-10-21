export enum TitleType {
  HOME_TITLE = 'Home',
}

export interface AppModel {
  title: TitleType;
}

export interface AppStateModel extends AppModel {}
