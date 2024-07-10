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
				onChange={ val => setAttributes(
					{ hidden_value_field: val } ) }
			/> }
		{ 'query_var' === attributes.field_value && <TextControl
			key="query_var_key"
			label="Query Variable Key"
			value={ attributes.query_var_key }
			onChange={ val => setAttributes( { query_var_key: val } ) }
		/> }
		{ 'current_date' === attributes.field_value && <>
			<TextControl
				key="date_format"
				label="Format"
				value={ attributes.date_format }
				onChange={ val => setAttributes( { date_format: val } ) }
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