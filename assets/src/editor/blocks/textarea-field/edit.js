import preview from './preview';

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
	      EditAdvancedRulesButton,
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
	      TextareaControl,
	      TextControl,
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

	useUniqueNameOnDuplicate();

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
		isSelected && <InspectorControls key={ uniqKey( 'InspectorControls' ) }>
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
					value={ attributes.minlength }
					label={ __( 'Min length (symbols)', 'jet-form-builder' ) }
					onChangePreset={ minlength => setAttributes(
						{ minlength } ) }
				>
					{ ( { instanceId } ) => <TextControl
						id={ instanceId }
						className="jet-fb m-unset"
						value={ attributes.minlength }
						onChange={ minlength => setAttributes( { minlength } ) }
					/> }
				</AdvancedInspectorControl>
				<AttributeHelp name="minlength"/>
				<AdvancedInspectorControl
					value={ attributes.maxlength }
					label={ __( 'Max length (symbols)', 'jet-form-builder' ) }
					onChangePreset={ maxlength => setAttributes(
						{ maxlength } ) }
				>
					{ ( { instanceId } ) => <TextControl
						id={ instanceId }
						className="jet-fb m-unset"
						value={ attributes.maxlength }
						onChange={ maxlength => setAttributes( { maxlength } ) }
					/> }
				</AdvancedInspectorControl>
				<AttributeHelp name="maxlength"/>
			</FieldSettingsWrapper>
			<PanelBody
				title={ __( 'Validation', 'jet-form-builder' ) }
			>
				<ValidationToggleGroup/>
				{ isAdvancedValidation && <>
					<EditAdvancedRulesButton/>
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
