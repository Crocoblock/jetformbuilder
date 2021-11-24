const { __ } = wp.i18n;

const { applyFilters } = wp.hooks;

const { select } = wp.data;

const { store: blocksStore } = wp.blocks;

const blocksRecursiveIterator = ( blockParserFunc ) => {
	const blocksRecursiveIterator = ( blocks ) => {

		blocks = blocks || select( 'core/block-editor' ).getBlocks();

		blocks.map( block => {
			blockParserFunc( block );

			if ( block.innerBlocks.length ) {
				blocksRecursiveIterator( block.innerBlocks );
			}
		} );
	};

	blocksRecursiveIterator();
}

const getFormFieldsBlocks = (
	exclude = [],
	placeholder = false,
	suppressFilter = false,
	context = 'default'
) => {
	let formFields = [];
	let skipFields = [ 'submit', 'form-break', 'heading', 'group-break', 'conditional', ...exclude ];

	blocksRecursiveIterator( block => {
		if ( block.name.includes( 'jet-forms/' )
			&& block.attributes.name
			&& ! skipFields.find( field => block.name.includes( field ) )
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

	return suppressFilter ? formFields : applyFilters( 'jet.fb.getFormFieldsBlocks', formFields, context );
}

const getFieldsWithoutCurrent = (
	placeholder = false,
	suppressFilter = false,
	context = 'default'
) => {

	const skipFields = [ 'submit', 'form-break', 'heading', 'group-break', 'conditional' ];
	let formFields = [];

	const current = wp.data.select( 'core/block-editor' ).getSelectedBlock();

	if ( null === current ) {
		return [];
	}

	blocksRecursiveIterator( block => {
		if ( block.name.includes( 'jet-forms/' )
			&& current.clientId !== block.clientId
			&& ! skipFields.find( field => block.name.includes( field ) )
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

	return suppressFilter ? formFields : applyFilters( 'jet.fb.getFormFieldsBlocks', formFields, context );
}

const getAvailableFields = ( exclude = [], context = 'default' ) => {
	let fields = [];
	const blocks = getFormFieldsBlocks( exclude, false, false, context );

	if ( blocks ) {
		blocks.forEach( item => fields.push( item.name ) );
	}
	return fields;
}

const getAvailableFieldsString = ( blockName ) => {
	const fields = getAvailableFields( [ blockName ] );

	let fieldsString = [];
	fields.forEach( function( item ) {
		fieldsString.push( '%FIELD::' + item + '%' );
	} );

	return __( 'Available fields: ', 'jet-form-builder' ) + fieldsString.join( ', ' );
}

const getInnerBlocks = ( clientId ) => {
	const block = wp.data.select( 'core/block-editor' ).getBlock( clientId );
	return block ? block.innerBlocks : [];
}

const getFormFieldsByBlock = ( blockExclude ) => {
	return () => getFormFieldsBlocks( [ blockExclude.name ] );
}

const getBlocksByName = blockNames => {
	const blocks = [];

	blocksRecursiveIterator( block => {
		if ( ! blockNames.includes( block.name ) ) {
			return;
		}
		blocks.push( block );
	} );

	return blocks;
};

export {
	getFormFieldsByBlock,
	getInnerBlocks,
	getAvailableFieldsString,
	getAvailableFields,
	getFormFieldsBlocks,
	getFieldsWithoutCurrent,
	getBlocksByName,
};

