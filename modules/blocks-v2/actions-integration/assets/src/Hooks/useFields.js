import { useSelect } from '@wordpress/data';
import { useBlockEditContext } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { useRequestFields } from 'jet-form-builder-actions';

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
		select => select( 'jet-forms/fields' ).getFields( options ),
		deps,
	);

	// should be deprecated
	fields = applyFilters( 'jet.fb.getFormFieldsBlocks', fields );

	fields.push( ...actionFields );

	return options.placeholder
	       ? [
			{ value: '', label: options.placeholder },
			...fields,
		]
	       : fields;
}

// backward compatibility
window.JetFBHooks           = window.JetFBHooks ?? {};
window.JetFBHooks.useFields = useFields;

export default useFields;