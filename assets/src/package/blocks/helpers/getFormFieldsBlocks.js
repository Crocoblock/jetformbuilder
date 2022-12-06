import blocksRecursiveIterator from './blocksRecursiveIterator';

const {
	      applyFilters,
	      addFilter,
      } = wp.hooks;
const {
	      select,
      } = wp.data;

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
			&& !skipFields.find( field => block.name.includes( field ) )
		) {

			const blockType = select( 'core/blocks' ).
				getBlockType( block.name );

			if ( !blockType.hasOwnProperty( 'jfbGetFields' ) ) {
				return;
			}

			const newFields = blockType.jfbGetFields.call( block, context );

			formFields.push(
				...newFields.filter( current => !formFields.some(
					( { value } ) => value === current.value,
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

export default getFormFieldsBlocks;