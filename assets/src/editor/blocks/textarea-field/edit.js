const {
	      ToolBarFields,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
	      BlockLabel,
	      BlockDescription,
	      BlockName,
	      BlockAdvancedValue,
      } = JetFBComponents;

const { useIsAdvancedValidation } = JetFBHooks;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const {
	      TextareaControl,
	      PanelBody,
	      __experimentalNumberControl,
      } = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

export default function TextareaEdit( props ) {

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey, attrHelp },
	      } = props;

	const blockProps           = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();

	const changeNumberAttr = attr => {
		for ( const [ name, value ] of Object.entries( attr ) ) {
			attr[ name ] = '' === value ? '' : Number( value );
		}

		setAttributes( attr );
	};

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
			<PanelBody title={ __( 'Value settings', 'jet-form-builder' ) }>
				<BlockAdvancedValue/>
			</PanelBody>
			<FieldSettingsWrapper { ...props }>
				<NumberControl
					label={ __( 'Min length (symbols)' ) }
					labelPosition="top"
					key="minlength"
					min={ 1 }
					value={ attributes.minlength }
					onChange={ minlength => changeNumberAttr( { minlength } ) }
				/>
				<NumberControl
					label={ __( 'Max length (symbols)' ) }
					labelPosition="top"
					key="maxlength"
					min={ 1 }
					value={ attributes.maxlength }
					onChange={ maxlength => changeNumberAttr( { maxlength } ) }
				/>
			</FieldSettingsWrapper>
			<PanelBody
				title={ __( 'Validation', 'jet-form-builder' ) }
			>
				<ValidationToggleGroup/>
				{ isAdvancedValidation && <>
					{ Boolean( attributes.minlength ) && <>
						<ValidationBlockMessage name="char_min"/>
					</> }
					{ Boolean( attributes.maxlength ) && <>
						<ValidationBlockMessage name="char_max"/>
					</> }
					<ValidationBlockMessage name="empty"/>
				</> }
			</PanelBody>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<TextareaControl
					key={ uniqKey( 'place_holder_block' ) }
					placeholder={ attributes.placeholder }
					onChange={ () => {
					} }
				/>
			</FieldWrapper>
		</div>,
	];
}
