import { fromJS } from 'immutable';
import * as Action from '../Action';

const initialState = fromJS({
	realname: null,
	mobile: null,
	idcard: null,
	sex: null
});

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
	case Action.RESET_ALL_STATE: {
		return initialState;
	}
	default:
		return state;
	}
}


