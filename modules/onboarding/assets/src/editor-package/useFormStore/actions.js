import {
	REGISTER_BUILDERS,
	SET_ERROR,
	UNREGISTER_BUILDERS,
	UPDATE_SETTINGS,
	TOGGLE_EXECUTION,
} from './constants';
import apiFetch from '@wordpress/api-fetch';

export function registerBuilders( items ) {
	return {
		type: REGISTER_BUILDERS,
		items,
	};
}

export function unRegisterBuilders( names ) {
	return {
		type: UNREGISTER_BUILDERS,
		names,
	};
}

export function updateSettings( settings ) {
	return {
		type: UPDATE_SETTINGS,
		settings,
	};
}

export const useForm = () => async ( { dispatch, select } ) => {
	const pageType = select.getSetting( 'pageType' );

	const response = 'new' === pageType
	                 ? await dispatch.createNewPage()
	                 : await dispatch.updateSelectedPage();

	if ( !response?.redirect ) {
		return;
	}

	window.open( response.redirect );
};

export const createNewPage      = () => async ( {
	dispatch,
	select,
	registry,
} ) => {
	const pageTitle = select.getSetting( 'pageTitle' );
	const builder   = select.getSetting( 'builder' );
	const formId    = registry.select(
		'core/editor',
	).getEditedPostAttribute( 'id' );

	const options = {
		path: `jet-form-builder/v1/use-form/${ formId }`,
		method: 'POST',
		data: {
			builder,
			pageTitle,
		},
	};

	return await dispatch.makeFetch( options );
};
export const updateSelectedPage = () => async ( { dispatch, select, registry } ) => {
	const pageId  = select.getSetting( 'pageId' );
	const builder = select.getSetting( 'builder' );
	const formId  = registry.select(
		'core/editor',
	).getEditedPostAttribute( 'id' );

	const options = {
		path: `jet-form-builder/v1/use-form/${ formId }`,
		method: 'POST',
		data: {
			builder,
			pageId,
		},
	};

	return await dispatch.makeFetch( options );
};

export const makeFetch = ( options ) => async ( { dispatch, registry } ) => {
	const { savePost } = registry.dispatch( 'core/editor' );
	/**
	 * We shouldn't track state of saving the form,
	 * because opening edited / created page will take more time
	 */
	savePost();

	dispatch.startExecution();
	let response;

	try {
		response = await apiFetch( options );
	}
	catch ( error ) {
		dispatch.setError( error );
		return;
	}
	finally {
		dispatch.finishExecution();
	}

	return response;
};

export const setError = ( error ) => {
	return {
		type: SET_ERROR,
		error,
	};
};

export const startExecution = ( actionSlug = 'default' ) => ( { dispatch } ) => {
	dispatch.setError( {} );
	dispatch( {
		type: TOGGLE_EXECUTION,
		actionSlug,
	} );
};

export const finishExecution = ( actionSlug = 'default' ) => {
	return {
		type: TOGGLE_EXECUTION,
		actionSlug,
	};
};