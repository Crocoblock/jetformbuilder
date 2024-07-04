import BaseAction from '../abstract/BaseAction';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';

function useActionErrors( action ) {
	action = new BaseAction( action );

	const validators = useSelect( select => {
			const actionType = select( STORE_NAME ).getAction(
				action.type,
			);

			return actionType?.validators ? actionType.validators : [];
		},
		[ action.type ],
	);

	const errors = [];

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