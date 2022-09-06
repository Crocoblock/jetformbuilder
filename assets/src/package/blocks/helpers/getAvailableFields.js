import getFormFieldsBlocks from './getFormFieldsBlocks';

function getAvailableFields( exclude = [], context = 'default' ) {
	let fields   = [];
	const blocks = getFormFieldsBlocks( exclude, false, false, context );

	if ( blocks ) {
		blocks.forEach( item => fields.push( item.name ) );
	}
	return fields;
}

export default getAvailableFields;