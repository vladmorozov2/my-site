
import { State, Selector, Action, StateContext } from '@ngxs/store';

export interface AboutMeStateModel {
  bio: string;
  interests: string;
}

@State<AboutMeStateModel>({
  name: 'aboutMe',
  defaults: {
    bio: 'Default Bio',
    interests: 'Default Interests',
  },
})
export class AboutMeState {
  @Selector()
  static getBio(state: AboutMeStateModel): string {
    return state.bio;
  }

  @Selector()
  static getInterests(state: AboutMeStateModel): string {
    return state.interests;
  }

  @Action({ type: '[Edit Page] Update Bio' })
  updateBio(ctx: StateContext<AboutMeStateModel>, action: any) {
    const state = ctx.getState();
    ctx.patchState({ bio: action.payload });
  }

  @Action({ type: '[Edit Page] Update Interests' })
  updateInterests(ctx: StateContext<AboutMeStateModel>, action: any) {
    const state = ctx.getState();
    ctx.patchState({ interests: action.payload });
  }
}
