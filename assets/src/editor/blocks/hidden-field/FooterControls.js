const { __ } = wp.i18n;

const {
	      TextControl,
	      withFilters,
      } = wp.components;

// eslint-disable-next-line complexity
let FooterControls = function ( { attributes, setAttributes } ) {
	return <>
		{ [ 'post_meta', 'user_meta' ].includes( attributes.field_value ) &&
			<TextControl
				key="hidden_value_field"
				label="Meta Field to Get Value From"
				value={ attributes.hidden_value_field }
				onChange={ hiddenValueField => setAttributes( {
					hidden_value_field: hiddenValueField,
				} ) }
			/> }
		{ 'query_var' === attributes.field_value && <TextControl
			key="query_var_key"
			label="Query Variable Key"
			value={ attributes.query_var_key }
			onChange={ queryVarKey => setAttributes( {
				query_var_key: queryVarKey,
			} ) }
		/> }
		{ 'current_date' === attributes.field_value && <>
			<TextControl
				key="date_format"
				label="Format"
				value={ attributes.date_format }
				onChange={ dateFormat => setAttributes( {
					date_format: dateFormat,
				} ) }
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