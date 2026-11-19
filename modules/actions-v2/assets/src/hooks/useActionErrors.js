import BaseAction from '../abstract/BaseAction';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';

function useActionErrors( action, includeEditorErrors = false ) {
	action = new BaseAction( action );

	const { validators, editorFieldErrors } = useSelect( select => {
			const actionType = select( STORE_NAME ).getAction(
				action.type,
			);

			return {
				validators: actionType?.validators ?? [],
				editorFieldErrors: includeEditorErrors
					? select( STORE_NAME ).getEditorFieldErrors()
					: undefined,
			};
		},
		[ action.type, includeEditorErrors ],
	);

	const errors = Object.values( editorFieldErrors ?? {} );

	for ( const validator of validators ) {
		const error = validator( { settings: action.selfSettings } );

		if ( Array.isArray( error ) ) {
			errors.push( ...error );

			continue;
		}

		if ( !error ) {
			continue;
		}
		errors.push( error );
	}

	return errors;
}

export default useActionErrors;