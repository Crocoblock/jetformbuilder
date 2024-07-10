import { useSelect } from '@wordpress/data';
import { useBlockEditContext } from '@wordpress/block-editor';
import { useRequestFields } from 'jet-form-builder-actions';

/**
 * @param  options {{
 *                 withInner: Boolean|undefined,
 *                 excludeCurrent: Boolean|undefined
 *                 currentId: String|undefined
 *                 placeholder: String|undefined
 *                 }}
 * @return {Array}
 */
function useFields( options = {} ) {
	const blockProps   = useBlockEditContext();
	const actionFields = useRequestFields();

	if ( options.excludeCurrent && blockProps?.clientId?.length ) {
		options.currentId = blockProps.clientId;
	}

	const fields = useSelect(
		select => select( 'jet-forms/fields' ).getFields( options ),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	return options.placeholder
	       ? [
			{ value: '', label: options.placeholder },
			...fields,
			...actionFields,
		]
	       : [
			...fields,
			...actionFields,
		];
}

// backward compatibility
window.JetFBHooks           = window.JetFBHooks ?? {};
window.JetFBHooks.useFields = useFields;

export default useFields;