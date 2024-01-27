import {  Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { EditModel } from './editmodel';
import { SaveDescription } from './edit.actions';


@State<EditModel>({
    name: 'edit',
    defaults: {
        smallDescription: "I'm a licensed architect and interior designer located in New York and working all over the USA."
    }
})
@Injectable()
    export class EditState {

        @Action(SaveDescription)
        saveDescription(ctx: StateContext<EditModel>, action: SaveDescription) {
            const state = ctx.getState();
            console.log("This action console log")
            console.log(action)
            ctx.setState({
                ...state,
                smallDescription: action.description.smallDescription
            });
            console.log("Get state")
            console.log(ctx.getState())
        }
    }
