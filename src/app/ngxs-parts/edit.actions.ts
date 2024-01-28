import { EditModel } from './editmodel';

export class SaveDescription {
  static readonly type = '[Edit] Save Description';
  constructor(public description: EditModel) {}
}
