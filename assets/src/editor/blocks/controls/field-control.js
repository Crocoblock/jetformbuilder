import { controlsSettings } from "../controls";
import DynamicPreset from "../../components/presets/dynamic-preset";
import FieldWithPreset from "../../components/field-with-preset";

const {
	TextControl,
	SelectControl,
	PanelBody,
	ToggleControl,
	ToolbarGroup,
	Flex,
} = wp.components;

const { useEffect, useState } = wp.element;

function FieldControl( { type, onChange, attributes } ) {
	const currentControl = controlsSettings[ type ];

	/*const [ result, setResult ] = useState( { ...attributes } );

	const onChangeValue = ( value, key ) => {
		setResult( prev => ( {
			...prev,
			[ key ]: value
		} ) );
	};

	useEffect( () => {
		onChange( result );
	}, [result] );*/

	const result = {};

	const onChangeValue = ( value, key ) => {
		result[ key ] = value;
		onChange( result );
	};

	for ( const attributesKey in attributes ) {
		result[ attributesKey ] = attributes[ attributesKey ];
	}


	return currentControl.attrs.map( ( { help = '', attrName, label, ...attr } ) => {
		if ( ! attrName in attributes ) {
			return null;
		}
		const keyControl = ( suffix = '' ) => `${ type }-${ attr.type }-${ attrName }-${ suffix }`;

		switch ( attr.type ) {
			case 'text':
				return <TextControl
					key={ keyControl() }
					label={ label }
					help={ help }
					value={ result[ attrName ] }
					onChange={ newVal => {
						onChangeValue( newVal, attrName )
					} }
				/>;
			case 'dynamic_text':
				return <FieldWithPreset
					key={ keyControl( 'FieldWithPreset' ) }
					ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
						value={ attributes[ attrName ] }
						isSaveAction={ actionClick }
						onSavePreset={ newVal => {
							onChangeValue( newVal, attrName )
						} }
						onUnMount={ onRequestClose }
					/> }
				>
					<TextControl
						key={ keyControl() }
						label={ label }
						help={ help }
						value={ attributes[ attrName ] }
						onChange={ newVal => {
							onChangeValue( newVal, attrName )
						} }
					/>
				</FieldWithPreset>;
			case 'select':
				return <SelectControl
					key={ keyControl() }
					label={ attr.label }
					value={ attributes[ attrName ] }
					options={ attr.options }
					onChange={ newVal => {
						onChangeValue( newVal, attrName )
					} }
				/>;
			case 'toggle':
				return <ToggleControl
					key={ keyControl() }
					label={ attr.label }
					checked={ attributes[ attrName ] }
					onChange={ newVal => {
						onChangeValue( newVal, attrName )
					} }
				/>;
		}

	} );

}

function GeneralFields( props ) {
	const currentControl = controlsSettings.general;

	return <PanelBody title={ currentControl.label } key={ 'jet-form-general-fields' }>
		<FieldControl
			type='general'
			key={ 'jet-form-general-fields-component' }
			{ ...props }
		/>
	</PanelBody>;
}

function AdvancedFields( props ) {
	const currentControl = controlsSettings.advanced;

	return <PanelBody title={ currentControl.label } key={ 'jet-form-advanced-fields' }>
		<FieldControl
			type='advanced'
			key={ 'jet-form-advanced-fields-component' }
			{ ...props }
		/>
	</PanelBody>;
}


function ToolBarFields( props ) {

	return <ToolbarGroup>
		<Flex
			align={ 'center' }
			justify={ 'center' }
			className={ 'jet-form-toggle-box' }
		>
			<FieldControl
				type='toolbar'
				key={ 'jet-form-toolbar-fields-component' }
				{ ...props }
			/>
		</Flex>
	</ToolbarGroup>;
}

export { GeneralFields, ToolBarFields, AdvancedFields };