const {
	      ToolBarFields,
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
	      BlockName,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
      } = JetFBComponents;
const {
	      useIsAdvancedValidation,
      } = JetFBHooks;
const {
	      __,
      } = wp.i18n;
const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;
const {
	      PanelBody,
	      __experimentalInputControl,
	      __experimentalNumberControl,
      } = wp.components;

let { InputControl, NumberControl } = wp.components;

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

export default function NumberEdit( props ) {
	const blockProps           = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey },
	      } = props;

	const changeNumberAttr = attr => {
		for ( const [ name, value ] of Object.entries( attr ) ) {
			attr[ name ] = '' === value ? null : Number( value );
		}

		setAttributes( attr );
	};

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && (
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
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
						label={ __( 'Min Value' ) }
						labelPosition="top"
						step={ 0.01 }
						value={ attributes.min }
						onChange={ min => changeNumberAttr( { min } ) }
					/>
					<NumberControl
						label={ __( 'Max Value' ) }
						labelPosition="top"
						step={ 0.01 }
						value={ attributes.max }
						onChange={ max => changeNumberAttr( { max } ) }
					/>
					<NumberControl
						label={ __( 'Step' ) }
						labelPosition="top"
						key="step"
						step={ 0.01 }
						value={ attributes.step }
						onChange={ step => changeNumberAttr( { step } ) }
					/>
				</FieldSettingsWrapper>
				<PanelBody
					title={ __( 'Validation', 'jet-form-builder' ) }
				>
					<ValidationToggleGroup/>
					{ isAdvancedValidation && <>
						{ null !== attributes.min && (
							<ValidationBlockMessage name="number_min"/>
						) }
						{ null !== attributes.max && (
							<ValidationBlockMessage name="number_max"/>
						) }
						<ValidationBlockMessage name="empty"/>
					</> }
				</PanelBody>
				<AdvancedFields/>
			</InspectorControls>
		),
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<NumberControl
					placeholder={ attributes.placeholder }
					key={ uniqKey( 'place_holder_block' ) }
					min={ attributes.min || 0 }
					max={ attributes.max || 1000 }
					step={ attributes.step || 1 }
				/>
			</FieldWrapper>
		</div>,
	];
}