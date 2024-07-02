import {
	START_FETCH,
	END_FETCH,
	SET_FETCH_ERROR,
	SET_LISTS, SET_FIELDS,
} from './constants';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

export const fetchApiData = ( apiKey ) => async ( { dispatch } ) => {
	if ( !apiKey ) {
		return;
	}

	dispatch( { type: START_FETCH } );
	dispatch( { type: SET_FETCH_ERROR, error: false } );

	const path = addQueryArgs(
		'jet-form-builder/v1/get-response',
		{ apiKey },
	);

	let response;
	try {
		response = await apiFetch( { path } );
	}
	catch ( error ) {
		dispatch( { type: SET_FETCH_ERROR, error } );
		return;
	}
	finally {
		dispatch( { type: END_FETCH } );
	}

	dispatch( { type: SET_LISTS, payload: response.lists } );
	dispatch( { type: SET_FIELDS, payload: response.fields } );
};
