import blocksRecursiveIterator from './blocksRecursiveIterator';

const {
	      applyFilters,
      } = wp.hooks;
const {
	      select,
      } = wp.data;

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

	blocksRecursiveIterator( block => {
		if ( block.name.includes( 'jet-forms/' )
			&& current?.clientId !== block.clientId
			&& !skipFields.find( field => block.name.includes( field ) )
		) {
			const blockType = select( 'core/blocks' ).
				getBlockType( block.name );

			let { fields: newFields = [] } = blockType.jfbResolveBlock.call(
				block,
				context,
			);

			if ( blockType.hasOwnProperty( 'jfbGetFields' ) ) {
				newFields = blockType.jfbGetFields.call( block, context );
			}

			formFields.push(
				...newFields.filter( formField => !formFields.some(
					( { value } ) => value === formField.value,
				) ),
			);
		}
	} );

	formFields = placeholder
	             ? [ { value: '', label: placeholder }, ...formFields ]
	             : formFields;

	return suppressFilter ? formFields : applyFilters(
		'jet.fb.getFormFieldsBlocks', formFields, context );
}

export default getFieldsWithoutCurrent;