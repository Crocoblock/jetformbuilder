const { __ } = wp.i18n;

const blocksRecursiveIterator = ( blockParserFunc ) => {
	const blocksRecursiveIterator = ( blocks ) => {

		blocks = blocks || wp.data.select( 'core/block-editor' ).getBlocks();

		blocks.map( block => {
			blockParserFunc( block );

			if ( block.innerBlocks.length ) {
				blocksRecursiveIterator( block.innerBlocks );
			}
		} );
	};

	blocksRecursiveIterator();
}

const getFormFieldsBlocks = ( exclude = [], placeholder = false ) => {
	const formFields = [];

	let skipFields = [ 'submit', 'form-break', 'heading', 'group-break', ...exclude ];

	blocksRecursiveIterator( block => {
		if ( block.name.includes( 'jet-forms/' )
			&& block.attributes.name
			&& ! skipFields.find( field => block.name.includes( field ) )
		) {
			formFields.push( {
				blockName: block.name,
				name: block.attributes.name,
				label: block.attributes.label || block.attributes.name,
				value: block.attributes.name,
			} );
		}
	} );

	return placeholder
		? [ { value: '', label: placeholder }, ...formFields ]
		: formFields;
}

const getFieldsWithoutCurrent = ( placeholder = false ) => {

	const skipFields = [ 'submit', 'form-break', 'heading', 'group-break' ];
	const formFields = [];

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

	return placeholder
		? [ { value: '', label: placeholder }, ...formFields ]
		: formFields;
};

const getAvailableFields = ( exclude = [] ) => {
	let fields = [];
	const blocks = getFormFieldsBlocks( exclude );

	if ( blocks ) {
		blocks.forEach( item => fields.push( item.name ) );
	}
	return fields;
}

const getAvailableFieldsString = ( blockName ) => {
	const fields = getAvailableFields( [ blockName ] );

	let fieldsString = [];
	fields.forEach( function ( item ) {
		fieldsString.push( '%FIELD::' + item + '%' );
	} );

	return __( 'Available fields: ' ) + fieldsString.join( ', ' );
}


const getInnerBlocks = ( clientId ) => {
	return wp.data.select( 'core/block-editor' ).getBlock( clientId ).innerBlocks;
}

const getFormFieldsByBlock = ( blockExclude ) => {
	return () => getFormFieldsBlocks( [ blockExclude.name ] );
}

export {
	getFormFieldsByBlock,
	getInnerBlocks,
	getAvailableFieldsString,
	getAvailableFields,
	getFormFieldsBlocks,
	getFieldsWithoutCurrent,
};
