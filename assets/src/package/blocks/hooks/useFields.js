import { storeName } from '../store';

const {
	      useSelect,
      } = wp.data;
const {
	      useBlockEditContext,
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
function useFields( options = {}, deps = undefined ) {
	const blockProps = useBlockEditContext();

	if ( options.excludeCurrent && blockProps?.clientId?.length ) {
		options.currentId = blockProps.clientId;
	}

	return useSelect(
		select => select( storeName ).getFields( options ),
		deps,
	);
}

export default useFields;