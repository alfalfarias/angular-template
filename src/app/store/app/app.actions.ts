import { TitleType } from './app.models';

export class SetTitleAction {
  static readonly type: string = '[APP] Set title';

  constructor(public title: TitleType) {}
}
