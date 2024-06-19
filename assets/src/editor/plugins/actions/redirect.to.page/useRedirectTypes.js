import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';

function useRedirectTypes( { fields } ) {
	const actionType = useSelect( select => {
		const { type } = select( 'jet-forms/actions' ).getCurrentAction();

		return select( 'jet-forms/actions' ).getAction( type );
	}, [] );

	return useMemo( () => {
		return actionType.redirectTypes.filter(
			( { isSupported = () => true } ) => (
				isSupported( { fields } )
			) );
	}, [] );
}

export default useRedirectTypes;