import { saveGlobalComponent } from "../../components/manager";

/**
 * WordPress dependencies
 */
const { withInstanceId } = window.wp.compose;

/**
 * Internal dependencies
 */
const {
	BaseControl,
	ToolbarGroup,
	Flex,
	ToggleControl,
} = wp.components;

function JetFormToolbar( {
							 help,
							 instanceId,
							 onChange,
							 className,
							 controls,
							 values,
							 hideLabelFromVision,
							 children
						 } ) {
	const result = {};
	const id = `inspector-select-control-${ instanceId }`;
	const onChangeValue = ( value, key ) => {
		result[ key ] = value;
		onChange( result );
	};

	for ( var i = 0; i < controls.length; i ++ ) {
		result[ controls[ i ].key ] = values[ controls[ i ].key ];
	}

	return <ToolbarGroup>
		<Flex
			align={ 'center' }
			justify={ 'center' }
			className={ 'jet-form-toggle-box' }
		>
			{ controls.map( ( data, index ) => {
				return <ToggleControl
					key={ data.key }
					label={ data.label }
					checked={ result[ data.key ] }
					onChange={ newVal => {
						onChangeValue( newVal, data.key )
					} }
				/>
			} ) }
			{ children }
		</Flex>
	</ToolbarGroup>;
}

saveGlobalComponent( 'JetFBComponents', JetFormToolbar );

export default withInstanceId( JetFormToolbar );