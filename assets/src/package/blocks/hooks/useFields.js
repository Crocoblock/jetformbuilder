import { storeName } from '../store';
import Tools from '../../tools';

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
 * placeholder: String|undefined
 * }}
 * @param deps {undefined|Array}
 * @returns {Array}
 */
function useFields( options = {}, deps = undefined ) {
	const blockProps = useBlockEditContext();

	if ( options.excludeCurrent && blockProps?.clientId?.length ) {
		options.currentId = blockProps.clientId;
	}

	const fields = useSelect(
		select => select( storeName ).getFields( options ),
		deps,
	);

	return options.placeholder
	       ? Tools.withPlaceholder( fields, options.placeholder )
	       : fields;
}

export default useFields;