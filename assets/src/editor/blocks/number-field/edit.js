import preview from './preview';

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
	      AdvancedInspectorControl,
	      AttributeHelp,
      } = JetFBComponents;
const {
	      useIsAdvancedValidation,
	      useUniqueNameOnDuplicate,
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
	      TextControl,
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

// eslint-disable-next-line max-lines-per-function
export default function NumberEdit( props ) {
	const blockProps           = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();
	useUniqueNameOnDuplicate();

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey },
	      } = props;

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

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
				<PanelBody title={ __( 'Value', 'jet-form-builder' ) }>
					<BlockAdvancedValue/>
				</PanelBody>
				<FieldSettingsWrapper { ...props }>
					<AdvancedInspectorControl
						value={ attributes.min }
						label={ __( 'Min Value', 'jet-form-builder' ) }
						onChangePreset={ min => setAttributes( { min } ) }
					>
						{ ( { instanceId } ) => <TextControl
							id={ instanceId }
							className="jet-fb m-unset"
							value={ attributes.min }
							onChange={ min => setAttributes( { min } ) }
						/> }
					</AdvancedInspectorControl>
					<AttributeHelp name="min"/>
					<AdvancedInspectorControl
						value={ attributes.max }
						label={ __( 'Max Value', 'jet-form-builder' ) }
						onChangePreset={ max => setAttributes( { max } ) }
					>
						{ ( { instanceId } ) => <TextControl
							id={ instanceId }
							className="jet-fb m-unset"
							value={ attributes.max }
							onChange={ max => setAttributes( { max } ) }
						/> }
					</AdvancedInspectorControl>
					<AttributeHelp name="max"/>
					<AdvancedInspectorControl
						value={ attributes.step }
						label={ __( 'Step', 'jet-form-builder' ) }
						onChangePreset={ step => setAttributes( { step } ) }
					>
						{ ( { instanceId } ) => <TextControl
							id={ instanceId }
							className="jet-fb m-unset"
							value={ attributes.step }
							onChange={ step => setAttributes( { step } ) }
						/> }
					</AdvancedInspectorControl>
					<AttributeHelp name="step"/>
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
					className="jet-form-builder__field-preview"
					key={ uniqKey( 'place_holder_block' ) }
					min={ attributes.min || 0 }
					max={ attributes.max || 1000 }
					step={ attributes.step || 1 }
				/>
			</FieldWrapper>
		</div>,
	];
}