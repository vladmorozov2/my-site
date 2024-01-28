// app.state.spec.ts

import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SaveDescription } from './edit.actions';
import { EditState } from './edit.state';

describe('AppState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([EditState])],
    });

    store = TestBed.inject(Store);
  });

  it('should set and get message', () => {
    const message = 'Hello, NGXS!';
    const message1 = 'Hello, NGXS!';
    store.dispatch(new SaveDescription({ smallDescription: message }));

    const result = store.selectSnapshot((state) => state.edit.smallDescription);

    expect(result).toEqual(message);
  });

  it('Testing default state', () => {
    const message =
      "I'm a licensed architect and interior designer located in New York and working all over the USA.";

    const result = store.selectSnapshot((state) => state.edit.smallDescription);
    console.log(result);

    expect(result).toEqual(message);
  });
});
