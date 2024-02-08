import { storeName } from '../store';
import useBlockAttributes from './useBlockAttributes';

const {
	      useEffect,
      } = wp.element;

const {
	      useSelect,
      } = wp.data;

const {
	      useBlockProps,
      } = wp.blockEditor;

function useUniqueNameOnDuplicate( customChangeNames = null ) {
	const blockProps     = useBlockProps();
	const [ , setAttrs ] = useBlockAttributes();

	const clientId = blockProps[ 'data-block' ];

	const names = useSelect(
		select => {
			const isJust = select( storeName ).isRecentlyAdded( clientId );

			if ( !isJust ) {
				return false;
			}

			const {
				      hasChanged,
				      names: namesLocal,
			      } = select( storeName ).getUniqueNames( clientId );

			return hasChanged ? namesLocal : false;
		},
		[ clientId ],
	);

	useEffect( () => {
		if ( !names ) {
			return;
		}

		if ( 'function' === typeof customChangeNames ) {
			customChangeNames( names );

			return;
		}

		setAttrs( {
			name: names.split( '|' )[ 0 ],
		} );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ names ] );
}

export default useUniqueNameOnDuplicate;