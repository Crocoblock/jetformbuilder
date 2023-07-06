import {
	fieldTypesList,
	maskPlaceholdersList,
	maskTypesList,
	maskVisibilitiesList,
} from './options';
import preview from './preview';

const {
	      ToolBarFields,
	      BlockName,
	      BlockLabel,
	      BlockDescription,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
	      BlockAdvancedValue,
	      EditAdvancedRulesButton,
	      BaseHelp,
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
	      TextControl,
	      SelectControl,
	      ToggleControl,
	      PanelBody,
	      __experimentalNumberControl,
      } = wp.components;

let { NumberControl } = wp.components;

NumberControl = NumberControl || __experimentalNumberControl;

export default function TextEdit( props ) {
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
		isSelected && <InspectorControls
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
				<SelectControl
					key="field_type"
					label={ __( 'Field Type' ) }
					labelPosition="top"
					value={ attributes.field_type }
					onChange={ newValue => {
						setAttributes( { field_type: newValue } );
					} }
					options={ fieldTypesList }
				/>
				<AdvancedInspectorControl
					value={ attributes.minlength }
					label={ __( 'Min length (symbols)', 'jet-form-builder' ) }
					onChangePreset={ minlength => setAttributes(
						{ minlength } ) }
				>
					{ ( { instanceId } ) => (
						<TextControl
							id={ instanceId }
							className="jet-fb m-unset"
							value={ attributes.minlength }
							onChange={ minlength => setAttributes(
								{ minlength } ) }
						/>
					) }
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
				<ToggleControl
					key={ 'enable_input_mask' }
					label={ __( 'Set Input Mask' ) }
					checked={ attributes.enable_input_mask }
					help={ __(
						'Check this to setup specific input format for the current field' ) }
					onChange={ newVal => {
						setAttributes( { enable_input_mask: newVal } );
					} }
				/>
				{ attributes.enable_input_mask && <React.Fragment>
					<ToggleControl
						label={ __(
							'Clear mask before submit',
							'jet-form-builder',
						) }
						checked={ attributes.clear_on_submit }
						onChange={ clear_on_submit => setAttributes(
							{ clear_on_submit },
						) }
					/>
					<SelectControl
						key="mask_type"
						label={ __( 'Mask type' ) }
						labelPosition="top"
						value={ attributes.mask_type }
						onChange={ ( newValue ) => {
							setAttributes( { mask_type: newValue } );
						} }
						options={ maskTypesList }
					/>
					<TextControl
						key="input_mask"
						label={ __( 'Input mask' ) }
						value={ attributes.input_mask }
						onChange={ ( newValue ) => {
							setAttributes( { input_mask: newValue } );
						} }
					/>
					{ (
						!attributes.mask_type
					) && <BaseHelp style={ { marginBottom: '2em' } }>
						{ attrHelp( 'input_mask_default' ) }
					</BaseHelp> }

					{ 'datetime' === attributes.mask_type && (
						<BaseHelp style={ { marginBottom: '2em' } }>
							{ __( 'Examples:',
								'jet-form-builder' ) } dd/mm/yyyy,
							mm/dd/yyyy<br/>
							{ __( 'More info - ', 'jet-form-builder' ) }
							<a href={ attrHelp( 'input_mask_datetime_link' ) }
							   target="_blank">{ __( 'here',
								'jet-form-builder' ) }</a>
						</BaseHelp>
					) }

					<SelectControl
						key="mask_visibility"
						label={ __( 'Mask visibility' ) }
						labelPosition="top"
						value={ attributes.mask_visibility }
						onChange={ ( newValue ) => {
							setAttributes( { mask_visibility: newValue } );
						} }
						options={ maskVisibilitiesList }
					/>
					<SelectControl
						key="mask_placeholder"
						label={ __( 'Mask placeholder' ) }
						labelPosition="top"
						value={ attributes.mask_placeholder }
						onChange={ ( newValue ) => {
							setAttributes( { mask_placeholder: newValue } );
						} }
						options={ maskPlaceholdersList }
					/>
				</React.Fragment> }
			</FieldSettingsWrapper>
			<PanelBody
				title={ __( 'Validation', 'jet-form-builder' ) }
			>
				<ValidationToggleGroup/>
				{ isAdvancedValidation && <>
					<EditAdvancedRulesButton/>
					{ 'email' === attributes.field_type && (
						<ValidationBlockMessage name="email"/>
					) }
					{ 'url' === attributes.field_type && (
						<ValidationBlockMessage name="url"/>
					) }
					{ attributes.enable_input_mask && (
						<ValidationBlockMessage name="inputmask"/>
					) }
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
				<TextControl
					placeholder={ attributes.placeholder }
					key={ uniqKey( 'place_holder_block' ) }
					onChange={ () => {
					} }
				/>
			</FieldWrapper>
		</div>,
	];
};
