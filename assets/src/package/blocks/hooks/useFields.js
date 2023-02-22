import { storeName } from '../store';

const {
	      useSelect,
      } = wp.data;
const {
	      useBlockProps,
      } = wp.blockEditor;

/**
 * @param options {{
 * withInner: Boolean|undefined,
 * excludeCurrent: Boolean|undefined
 * currentId: String|undefined
 * }}
 * @param deps {undefined|Array}
 * @returns {Array}
 */
function useFields( options = {}, deps= undefined ) {
	const blockProps = useBlockProps();

	if ( options.excludeCurrent ) {
		options.currentId = blockProps[ 'data-block' ];
	}

	return useSelect(
		select => select( storeName ).getFields( options ),
		deps,
	);
}

export default useFields;