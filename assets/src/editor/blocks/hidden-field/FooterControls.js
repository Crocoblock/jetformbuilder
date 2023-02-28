const { __ } = wp.i18n;

const {
	      TextControl,
	      withFilters,
      } = wp.components;

let FooterControls = function ( { attributes, setAttributes } ) {
	return <>
		{ [ 'post_meta', 'user_meta' ].includes( attributes.field_value ) &&
		<TextControl
			key="hidden_value_field"
			label="Meta Field to Get Value From"
			value={ attributes.hidden_value_field }
			onChange={ hidden_value_field => setAttributes(
				{ hidden_value_field } ) }
		/> }
		{ 'query_var' === attributes.field_value && <TextControl
			key="query_var_key"
			label="Query Variable Key"
			value={ attributes.query_var_key }
			onChange={ query_var_key => setAttributes( { query_var_key } ) }
		/> }
		{ 'current_date' === attributes.field_value && <>
			<TextControl
				key="date_format"
				label="Format"
				value={ attributes.date_format }
				onChange={ date_format => setAttributes( { date_format } ) }
			/>
			<b>{ __( 'Example:', 'jet-form-builder' ) }</b><br/>
			<i>Y-m-d\TH:i - </i>{ __( 'datetime format',
			'jet-form-builder' ) }<br/>
			<i>U - </i>{ __( 'timestamp format', 'jet-form-builder' ) }
		</> }
		{ 'manual_input' === attributes.field_value && <TextControl
			key="hidden_value"
			label="Value"
			value={ attributes.hidden_value }
			onChange={ newValue => {
				setAttributes( { hidden_value: newValue } );
			} }
		/> }
	</>;
};

FooterControls = withFilters(
	'jfb.hidden-field.field-value.controls',
)( FooterControls );

export default FooterControls;