import { listFrom } from '../components/sources';

const DELIMITER = ' - ';

function usePreviewOptions( {
	field_options_from,
	field_options_post_type,
	field_options_tax,
	field_options_key,
	generator_function,
	generator_field,
	field_options,
} ) {

	if ( 'manual_input' === field_options_from && field_options?.length ) {
		return field_options;
	}

	let full_label = [];
	let value      = [];

	// it should be refactored in redux store selectors
	switch ( field_options_from ) {
		case 'posts':
			if ( field_options_post_type ) {
				value.push(
					window.JetFormOptionFieldData.post_types_list.find(
						option => option.value === field_options_post_type,
					)?.label,
				);
			}
			break;

		case 'terms':
			if ( field_options_tax ) {
				value.push(
					window.JetFormOptionFieldData.taxonomies_list.find(
						option => option.value === field_options_tax,
					)?.label,
				);
			}
			break;

		case 'meta_field':
			if ( field_options_key ) {
				value.push( field_options_key );
			}
			break;

		case 'generate':
			if ( generator_function ) {
				value.push(
					window.JetFormOptionFieldData.generators_list.find(
						option => option.value === generator_function,
					)?.label,
				);
			}
			if ( generator_field ) {
				value.push( generator_field );
			}
			break;

	}
	full_label.push(
		listFrom.find( option => option.value === field_options_from )?.label,
	);

	if ( value.length ) {
		full_label.push( value.join( DELIMITER ) );
	}

	const singleLabel = full_label.join( DELIMITER );

	return (
		new Array( 3 )
	).fill( { label: singleLabel } );

}

export default usePreviewOptions;