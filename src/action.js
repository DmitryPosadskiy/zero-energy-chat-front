import axios from 'axios';
import { SEND_MESSAGE, RECEIVE_MESSAGE } from './URL';
import { SEND_MESSAGE_SUCCESS, RECEIVE_MESSAGE_SUCCESS } from './ActionType';

export const sendMessage = (message) => dispatch => {
	axios.post(SEND_MESSAGE, message)
		.then(result => {
			dispatch({
				type: SEND_MESSAGE_SUCCESS,
			});
		})
};

export const receiveMessage = () => dispatch => {
	axios.get(RECEIVE_MESSAGE)
		.then(result => {
			dispatch({
				type: RECEIVE_MESSAGE_SUCCESS,
				messages: result.data,
			});
		})
};