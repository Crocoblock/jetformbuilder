import { controlsSettings } from "../controls";
import DynamicPreset from "../../components/presets/dynamic-preset";
import FieldWithPreset from "../../components/field-with-preset";

const {
	BlockControls
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	TextControl,
	SelectControl,
	PanelBody,
	ToggleControl,
	ToolbarGroup,
	Flex,
} = wp.components;

const { useEffect, useState } = wp.element;

function FieldControl( { type, setAttributes, attributes } ) {
	const currentControl = controlsSettings[ type ];

	const onChangeValue = ( value, key ) => {
		setAttributes( { [ key ]: value } );
	};

	return currentControl.attrs.map( ( { help = '', attrName, label, ...attr } ) => {
		if ( ( ! ( attrName in attributes ) ) || ( 'condition' in attr && ! attributes[ attr.condition ] ) ) {
			return null;
		}

		switch ( attr.type ) {
			case 'text':
				return <TextControl
					key={ `${ attr.type }-${ attrName }-TextControl` }
					label={ label }
					help={ help }
					value={ attributes[ attrName ] }
					onChange={ newVal => {
						onChangeValue( newVal, attrName )
					} }
				/>;
			case 'dynamic_text':
				return <FieldWithPreset
					key={ `${ attr.type }-${ attrName }-FieldWithPreset` }
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
						key={ `${ attr.type }-${ attrName }-TextControlDynamic` }
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
					key={ `${ attr.type }-${ attrName }-SelectControl` }
					label={ label }
					value={ attributes[ attrName ] }
					options={ attr.options }
					onChange={ newVal => {
						onChangeValue( newVal, attrName )
					} }
				/>;
			case 'toggle':
				return <ToggleControl
					key={ `${ attr.type }-${ attrName }-ToggleControl` }
					label={ label }
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

	return <PanelBody title={ currentControl.label } key={ 'jet-form-advanced-fields' } initialOpen={ false }>
		<FieldControl
			type='advanced'
			key={ 'jet-form-advanced-fields-component' }
			{ ...props }
		/>
	</PanelBody>;
}


function ToolBarFields( props ) {

	const { editProps: { uniqKey }, children = [] } = props;

	return <BlockControls key={ uniqKey( 'ToolBarFields-BlockControls' ) }>
		<ToolbarGroup key={ uniqKey( 'ToolBarFields-ToolbarGroup' ) }>
			<Flex
				align={ 'center' }
				justify={ 'center' }
				className={ 'jet-form-toggle-box' }
			>
				<FieldControl
					type='toolbar'
					key={ uniqKey( 'jet-form-toolbar-fields-component' ) }
					{ ...props }
				/>
				{ children }
			</Flex>
		</ToolbarGroup>
	</BlockControls>;
}

export { GeneralFields, ToolBarFields, AdvancedFields };