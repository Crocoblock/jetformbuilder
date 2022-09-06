const { applyFilters } = wp.hooks;

const getFormFields = ( blockParserFunc, blocks ) => {
	blocks.map( block => {
		blockParserFunc( block );

		if ( block.innerBlocks.length ) {
			getFormFields( blockParserFunc, block.innerBlocks );
		}
	} );
};

const withSelectFormFields = (
	exclude        = [],
	placeholder    = false,
	suppressFilter = false,
) => select => {

	let formFields = [];
	let skipFields = [
		'submit',
		'form-break',
		'heading',
		'group-break',
		'conditional',
		...exclude,
	];

	getFormFields( block => {
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
	}, select( 'core/block-editor' ).getBlocks() );

	formFields = placeholder
	             ? [ { value: '', label: placeholder }, ...formFields ]
	             : formFields;

	return {
		formFields: suppressFilter ? formFields : applyFilters(
			'jet.fb.getFormFieldsBlocks', formFields ),
	};
};

export default withSelectFormFields;