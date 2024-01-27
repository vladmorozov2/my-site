import { EditModel } from "./editmodel";

export class SaveDescription {
    static readonly type = '[Edit] Save Description';
    constructor(public description: EditModel) {}
}

export class ClearDescription {
    static readonly type = '[Edit] Clear Description';
}

