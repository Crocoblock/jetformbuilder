const {
	      ToolBarFields,
	      BlockName,
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
	      AdvancedFields,
	      FieldWrapper,
	      AdvancedInspectorControl,
	      ClientSideMacros,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
      } = JetFBComponents;
const {
	      useInsertMacro,
	      useIsAdvancedValidation,
      } = JetFBHooks;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const {
	      TextControl,
	      PanelBody,
	      __experimentalInputControl,
      } = wp.components;

let { InputControl } = wp.components;

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

export default function TimeEdit( props ) {
	const {
		      isSelected,
		      attributes,
		      setAttributes,
		      editProps: { uniqKey },
	      } = props;

	const blockProps = useBlockProps();

	const [ minInput, updateMin ] = useInsertMacro( 'min' );
	const [ maxInput, updateMax ] = useInsertMacro( 'max' );
	const isAdvancedValidation    = useIsAdvancedValidation();

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
			<PanelBody title={ __( 'Value', 'jet-form-builder' ) }>
				<BlockAdvancedValue
					help={ __(
						'Plain date should be in hh:mm format',
						'jet-form-builder',
					) }
					style={ { marginBottom: '1em' } }
				/>
				<ClientSideMacros>
					<AdvancedInspectorControl
						value={ attributes.min }
						label={ __( 'Starting from time', 'jet-form-builder' ) }
						onChangePreset={ min => setAttributes( { min } ) }
						onChangeMacros={ updateMin }
					>
						{ ( { instanceId } ) => <TextControl
							id={ instanceId }
							ref={ minInput }
							value={ attributes.min }
							help={ __(
								'Plain time should be in hh:mm format',
								'jet-form-builder',
							) }
							onChange={ min => setAttributes( { min } ) }
						/> }
					</AdvancedInspectorControl>
					<AdvancedInspectorControl
						value={ attributes.max }
						label={ __( 'Limit time to', 'jet-form-builder' ) }
						onChangePreset={ max => setAttributes( { max } ) }
						onChangeMacros={ updateMax }
					>
						{ ( { instanceId } ) => <TextControl
							id={ instanceId }
							ref={ maxInput }
							value={ attributes.max }
							help={ __(
								'Plain time should be in hh:mm format',
								'jet-form-builder',
							) }
							onChange={ max => setAttributes( { max } ) }
						/> }
					</AdvancedInspectorControl>
				</ClientSideMacros>
			</PanelBody>
			<PanelBody
				title={ __( 'Validation', 'jet-form-builder' ) }
			>
				<ValidationToggleGroup/>
				{ isAdvancedValidation && <>
					{ Boolean( attributes.min ) && <>
						<ValidationBlockMessage name="date_min"/>
					</> }
					{ Boolean( attributes.max ) && <>
						<ValidationBlockMessage name="date_max"/>
					</> }
					<ValidationBlockMessage name="empty"/>
				</> }
			</PanelBody>
			<AdvancedFields/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<TextControl
					onChange={ () => {
					} }
					key={ uniqKey( 'place_holder_block' ) }
					placeholder={ 'Input type="time"' }
				/>
			</FieldWrapper>
		</div>,
	];
}