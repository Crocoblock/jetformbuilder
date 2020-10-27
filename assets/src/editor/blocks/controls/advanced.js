/**
 * WordPress dependencies
 */
const { withInstanceId } = window.wp.compose;

/**
 * Internal dependencies
 */
const {
	TextControl,
	SelectControl,
	PanelBody,
	ToggleControl,
} = wp.components;

const { __ } = wp.i18n;

function JetFormAdvanced( {
	help,
	instanceId,
	onChange,
	className,
	controls,
	values,
	hideLabelFromVision
} ) {
	const result = {};
	const onChangeValue = ( value, key ) => {
		result[ key ] = value;
		onChange( result );
	};

	for ( var i = 0; i < controls.length; i++) {
		result[ controls[ i ].key ] = values[ controls[ i ].key ];
	};

	/* eslint-disable jsx-a11y/no-onchange */
	return <PanelBody title={ __( 'Advanced' ) } initialOpen={ false }>
		{ controls.map( ( data, index ) => {

			var condition = true;

			if ( data.condition ) {
				condition = result[ data.condition ];
			}

			switch ( data.type ) {
				case 'text':
					return condition && <TextControl
						key={ data.key }
						label={ data.label }
						value={ result[ data.key ] }
						onChange={ newVal => {
							onChangeValue( newVal, data.key )
						} }
					/>;
				case 'select':
					return condition && <SelectControl
						key={ data.key }
						label={ data.label }
						value={ result[ data.key ] }
						options={ data.options }
						onChange={ newVal => {
							onChangeValue( newVal, data.key )
						} }
					/>;
				case 'toggle':
					return condition && <ToggleControl
						key={ data.key }
						label={ data.label }
						checked={ result[ data.key ] }
						onChange={ newVal => {
							onChangeValue( newVal, data.key )
						} }
					/>
			};
		})}
	</PanelBody>
	/* eslint-enable jsx-a11y/no-onchange */
}

export default withInstanceId( JetFormAdvanced );