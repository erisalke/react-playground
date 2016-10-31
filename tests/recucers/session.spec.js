import { expect } from 'chai';
import reducer from '../../app/reducers/session';

describe('session reducer', () => {

	it('sets user properly', () => {
		const initialState = {};

    const action = { type: 'SET_USER_INTERNAL', user: { id: 123, name: "Bob" } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
			user: { id: 123, name: "Bob" }
    });
  });

	it('sets sign properly', () => {
		const initialState = {};

    const action = { type: 'SET_USER_SIGN', signs: { me: "X", opp: "Y" } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
			signs: { me: "X", opp: "Y" }
    });
  });

});
