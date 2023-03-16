import { storeName } from '../store';
import Tools from '../../tools';
import useRequestFields from '../../actions/hooks/useRequestFields';

const {
	      useSelect,
      } = wp.data;
const {
	      useBlockEditContext,
      } = wp.blockEditor;

const { applyFilters } = wp.hooks;

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
	const blockProps   = useBlockEditContext();
	const actionFields = useRequestFields();

	if ( options.excludeCurrent && blockProps?.clientId?.length ) {
		options.currentId = blockProps.clientId;
	}

	let fields = useSelect(
		select => select( storeName ).getFields( options ),
		deps,
	);

	// should be deprecated
	fields = applyFilters( 'jet.fb.getFormFieldsBlocks', fields );

	fields.push( ...actionFields );

	return options.placeholder
	       ? Tools.withPlaceholder( fields, options.placeholder )
	       : fields;
}

export default useFields;