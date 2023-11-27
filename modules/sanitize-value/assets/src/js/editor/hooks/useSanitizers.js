import constants from '../store/constants';
import { SUPPORT_NAME } from '../constants';

const {
	      useSelect,
      } = wp.data;

const {
	      useBlockEditContext,
      } = wp.blockEditor;

function useSanitizers() {
	const { clientId, name } = useBlockEditContext();

	const support = useSelect( select => (
		select( 'core/blocks' ).getBlockSupport( name, SUPPORT_NAME )
	), [] );

	return useSelect(
		select => {
			const types = select( constants.store ).getTypes();

			if ( !Array.isArray( support ) ) {
				return types;
			}

			return types.filter(
				( { value } ) => support.includes( value ),
			);
		},
		[ clientId ],
	);
}

export default useSanitizers;