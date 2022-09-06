import blocksRecursiveIterator from './blocksRecursiveIterator';

const { applyFilters, addFilter } = wp.hooks;

function getFormFieldsBlocks(
	exclude        = [],
	placeholder    = false,
	suppressFilter = false,
	context        = 'default',
) {
	let formFields = [];
	let skipFields = [
		'submit',
		'form-break',
		'heading',
		'group-break',
		'conditional',
		...exclude,
	];

	blocksRecursiveIterator( block => {
		if ( block.name.includes( 'jet-forms/' )
			&& block.attributes.name
			&& !skipFields.find( field => block.name.includes( field ) )
		) {

			/*const blockType = select( blocksStore ).getBlockType( block.name );*/

			formFields.push( {
				blockName: block.name,
				name: block.attributes.name,
				label: block.attributes.label || block.attributes.name,
				value: block.attributes.name,
				//icon: blockType.icon.src,
			} );
		}
	} );

	formFields = placeholder
	             ? [ { value: '', label: placeholder }, ...formFields ]
	             : formFields;

	return suppressFilter ? formFields : applyFilters(
		'jet.fb.getFormFieldsBlocks', formFields, context );
}

export default getFormFieldsBlocks;