import { getSelectSource } from "./sources";

const {
	TextControl,
} = wp.components;

const { __ } = wp.i18n;

function FromPostTermsFields( props ) {

	const {
		attributes,
		setAttributes,
		editProps: { attrHelp }
	} = props;

	return <>
		{ getSelectSource( props ) }
		<TextControl
			key='value_from_key'
			label={ __( 'Value from meta field' ) }
			value={ attributes.value_from_key }
			help={ attrHelp( 'value_from_meta' ) }
			onChange={ ( newValue ) => {
				setAttributes( { value_from_key: newValue } );
			} }
		/>
		<TextControl
			key='calculated_value_from_key'
			label={ __( 'Calculated value from meta field' ) }
			value={ attributes.calculated_value_from_key }
			help={ attrHelp( 'calc_value_from_meta' ) }
			onChange={ ( newValue ) => {
				setAttributes( { calculated_value_from_key: newValue } );
			} }
		/>
	</>;

}

export default FromPostTermsFields;