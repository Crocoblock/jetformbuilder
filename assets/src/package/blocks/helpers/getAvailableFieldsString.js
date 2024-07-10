import getAvailableFields from './getAvailableFields';

const { __ } = wp.i18n;

function getAvailableFieldsString( blockName ) {
	const fields = getAvailableFields( [ blockName ] );

	const fieldsString = [];
	fields.forEach( function ( item ) {
		fieldsString.push( '%FIELD::' + item + '%' );
	} );

	return __( 'Available fields: ', 'jet-form-builder' ) +
		fieldsString.join( ', ' );
}

export default getAvailableFieldsString;