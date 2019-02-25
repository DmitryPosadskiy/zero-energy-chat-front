import { combineReducers } from 'redux';
import { SEND_MESSAGE_SUCCESS, RECEIVE_MESSAGE_SUCCESS } from './ActionType';

const defaultState = {
	messages: [],
};

const message = (state = defaultState, action) => {
	switch (action.type) {
		case SEND_MESSAGE_SUCCESS: return {
			...state,
		};
		case RECEIVE_MESSAGE_SUCCESS: return {
			...state,
			messages: action.messages,
		};
		default: return state;
	}
};

const rootReducer = combineReducers({
	message,
});

export default rootReducer;