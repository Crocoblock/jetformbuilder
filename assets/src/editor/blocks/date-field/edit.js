const {
		  ToolBarFields,
		  GeneralFields,
		  AdvancedFields,
		  FieldWrapper,
		  FieldSettingsWrapper,
	  } = JetFBComponents;

const { __ } = wp.i18n;

const {
		  InspectorControls,
		  useBlockProps,
	  } = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
		  TextControl,
		  ToggleControl,
		  PanelBody,
		  __experimentalInputControl,
	  } = wp.components;

let { InputControl } = wp.components;

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

export default function DateEdit( props ) {
	const blockProps = useBlockProps();

	const {
			  attributes,
			  isSelected,
			  setAttributes,
			  editProps: { uniqKey, blockName, attrHelp },
		  } = props;

	return [
		<ToolBarFields
			key={ uniqKey( 'JetForm-toolbar' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				{ ...props }
			/>
			<FieldSettingsWrapper { ...props }>
				<ToggleControl
					key='is_timestamp'
					label={ __( 'Is Timestamp' ) }
					checked={ attributes.is_timestamp }
					help={ attrHelp( 'is_timestamp' ) }
					onChange={ ( newValue ) => {
						setAttributes( { is_timestamp: Boolean( newValue ) } );
					} }
				/>
			</FieldSettingsWrapper>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<TextControl
					onChange={ () => {
					} }
					key={ `place_holder_block_${ blockName }` }
					placeholder={ 'Input type="date"' }
				/>
			</FieldWrapper>
		</div>,
	];
}