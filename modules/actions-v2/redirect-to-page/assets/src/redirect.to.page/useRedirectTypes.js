import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';
import { STORE_NAME } from 'jet-form-builder-actions';

function useRedirectTypes( { fields } ) {
	const actionType = useSelect( select => {
		const { type } = select( STORE_NAME ).getCurrentAction();

		return select( STORE_NAME ).getAction( type );
	}, [] );

	return useMemo( () => {
		return actionType.redirectTypes.filter(
			( { isSupported = () => true } ) => (
				isSupported( { fields } )
			) );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );
}

export default useRedirectTypes;