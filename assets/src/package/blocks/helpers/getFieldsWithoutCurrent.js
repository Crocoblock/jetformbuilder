import blocksRecursiveIterator from './blocksRecursiveIterator';

const { applyFilters, addFilter } = wp.hooks;

function getFieldsWithoutCurrent(
	placeholder    = false,
	suppressFilter = false,
	context        = 'default',
) {

	const skipFields = [
		'submit',
		'form-break',
		'heading',
		'group-break',
		'conditional',
	];
	let formFields   = [];

	const current = wp.data.select( 'core/block-editor' ).getSelectedBlock();

	if ( null === current ) {
		return [];
	}

	blocksRecursiveIterator( block => {
		if ( block.name.includes( 'jet-forms/' )
			&& current.clientId !== block.clientId
			&& !skipFields.find( field => block.name.includes( field ) )
		) {
			formFields.push( {
				blockName: block.name,
				label: block.attributes.label || block.attributes.name,
				value: block.attributes.name,
			} );
		}
	} );

	formFields = placeholder
	             ? [ { value: '', label: placeholder }, ...formFields ]
	             : formFields;

	return suppressFilter ? formFields : applyFilters(
		'jet.fb.getFormFieldsBlocks', formFields, context );
}

export default getFieldsWithoutCurrent;