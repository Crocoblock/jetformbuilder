import {
	END_FETCH,
	SET_FETCH_ERROR,
	SET_FIELDS,
	SET_LISTS,
	START_FETCH,
} from './constants';
import { combineReducers } from '@wordpress/data';

const api = function ( state = {}, action ) {
	switch ( action?.type ) {
		case SET_LISTS:
			return {
				...state,
				lists: action.payload,
			};
		case SET_FIELDS:
			return {
				...state,
				fields: action.payload,
			};
	}

	return state;
};

const fetch = function ( state = {}, action ) {
	switch ( action?.type ) {
		case START_FETCH:
			return {
				...state,
				loading: true,
			};
		case END_FETCH:
			return {
				...state,
				loading: false,
			};
		case SET_FETCH_ERROR:
			return {
				...state,
				error: action.error,
			};
	}

	return state;
};

const reducer = combineReducers( {
	api,
	fetch,
} );

export default reducer;