import * as types from '../../actions/action-types';


const score = (score = 0, action) => {
  switch (action && action.type) {

		case types.ADD_POINT: {
				return score+1
			}

    default:
      return score;

  }
};

export default score;
