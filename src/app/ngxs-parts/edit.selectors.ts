import { Selector } from '@ngxs/store';
import { EditModel } from './editmodel';
import { EditState } from './edit.state';

export class EditSelectors {
  @Selector([EditState])
  static smallDescription(state: EditModel) {
    return state.smallDescription;
  }
}
