import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = () => {
	return {
		signs: {
			me: "O",
			opp: "X"
		}
	}
}

const session = (state = initialState(), action) => {
  switch (action.type) {

    case types.SET_USER_SIGN:
			return _.assign({},
				state,
				{
					signs: {
						me: action.signs.me,
						opp: action.signs.opp,
					}
				}
			);

    case types.SET_USER_INTERNAL:
			return _.assign({}, state, { user: action.user });

    default:
      return state;

  }
};

export default session;
