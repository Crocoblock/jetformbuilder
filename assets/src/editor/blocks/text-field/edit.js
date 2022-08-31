import {
	fieldTypesList,
	maskPlaceholdersList,
	maskTypesList,
	maskVisibilitiesList,
} from './options';

const {
	      ToolBarFields,
	      GeneralFields,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
	      DynamicValues,
	      EditAdvancedRulesButton,
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
	      TextControl,
	      SelectControl,
	      ToggleControl,
	      PanelBody,
	      __experimentalNumberControl,
      } = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

export default function TextEdit( props ) {
	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey, attrHelp },
	      } = props;

	const changeNumberValue = ( key, newValue ) => {
		const value = (
			              newValue && newValue > 0
		              ) ? parseInt( newValue ) : null;

		props.setAttributes( { [ key ]: value } );
	};

	const blockProps           = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
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
				<NumberControl
					label={ __( 'Min length (symbols)' ) }
					labelPosition="top"
					key="minlength"
					min={ 1 }
					value={ attributes.minlength }
					onChange={ ( newValue ) => changeNumberValue( 'minlength',
						newValue ) }
				/>
				<NumberControl
					label={ __( 'Max length (symbols)' ) }
					labelPosition="top"
					key="maxlength"
					min={ 1 }
					value={ attributes.maxlength }
					onChange={ ( newValue ) => changeNumberValue( 'maxlength',
						newValue ) }
				/>
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
					) && <div className={ 'help-input' }>
						{ attrHelp( 'input_mask_default' ) }
					</div> }

					{ 'datetime' === attributes.mask_type &&
					<div className={ 'help-input' }>
						{ __( 'Examples:', 'jet-form-builder' ) } dd/mm/yyyy,
						mm/dd/yyyy<br/>
						{ __( 'More info - ', 'jet-form-builder' ) }
						<a href={ attrHelp( 'input_mask_datetime_link' ) }
						   target="_blank">{ __( 'here',
							'jet-form-builder' ) }</a>
					</div> }

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
					<EditAdvancedRulesButton
						key={ uniqKey( 'EditAdvancedRulesButton' ) }
					/>
					{ 'email' === attributes.field_type && (
						<ValidationBlockMessage name="email"/>
					) }
					{ 'url' === attributes.field_type && (
						<ValidationBlockMessage name="url"/>
					) }
					{ attributes.enable_input_mask && (
						<ValidationBlockMessage name="inputmask"/>
					) }
					<ValidationBlockMessage name="empty"/>
					<ValidationBlockMessage name="char_max"/>
					<ValidationBlockMessage name="char_min"/>
				</> }
			</PanelBody>
			<DynamicValues/>
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
