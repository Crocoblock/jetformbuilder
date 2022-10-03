import {
	userAccess,
	valueFormats,
} from './options';

const {
	      ToolBarFields,
	      GeneralFields,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      ValidationBlockMessage,
	      ValidationToggleGroup,
      } = JetFBComponents;
const {
	      useIsAdvancedValidation,
      } = JetFBHooks;
const {
	      __,
      } = wp.i18n;

const {
	      useBlockProps,
	      InspectorControls,
      } = wp.blockEditor;

const {
	      SelectControl,
	      ToggleControl,
	      FormTokenField,
	      TextControl,
	      __experimentalNumberControl,
	      __experimentalInputControl,
	      PanelBody,
      } = wp.components;

let { NumberControl, InputControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

const localizeData = window.jetFormMediaFieldData;

export default function MediaEdit( props ) {

	const blockProps           = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey, attrHelp },
	      } = props;

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && (
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
				<GeneralFields
					key={ uniqKey( 'GeneralFields' ) }
					{ ...props }
				/>
				<FieldSettingsWrapper { ...props }>
					<SelectControl
						key="allowed_user_cap"
						label={ __( 'User access' ) }
						labelPosition="top"
						value={ attributes.allowed_user_cap }
						onChange={ ( newValue ) => {
							setAttributes( { allowed_user_cap: newValue } );
						} }
						options={ userAccess }
					/>
					{ 'any_user' !== attributes.allowed_user_cap && <>
						<ToggleControl
							key="insert_attachment"
							label={ __( 'Insert attachment' ) }
							checked={ attributes.insert_attachment }
							help={ attrHelp( 'insert_attachment' ) }
							onChange={ ( newValue ) => {
								setAttributes( {
									insert_attachment: Boolean( newValue ),
								} );
							} }
						/>
						{ attributes.insert_attachment && <SelectControl
							key="value_format"
							label={ __( 'Field value' ) }
							labelPosition="top"
							value={ attributes.value_format }
							onChange={ ( newValue ) => {
								props.setAttributes(
									{ value_format: newValue } );
							} }
							options={ valueFormats }
						/> }
					</> }
					<NumberControl
						key="max_files"
						label={ __( 'Maximum allowed files to upload' ) }
						labelPosition="top"
						help={ attrHelp( 'max_files' ) }
						value={ attributes.max_files }
						onChange={ ( newValue ) => {
							props.setAttributes(
								{ max_files: parseInt( newValue ) } );
						} }
					/>
					<NumberControl
						label={ __( 'Maximum size in Mb' ) }
						labelPosition="top"
						key="max_size"
						help={ attrHelp( 'max_size' ) }
						value={ attributes.max_size }
						step={ 0.01 }
						onChange={ newValue => {
							props.setAttributes(
								{ max_size: Number( newValue ) } );
						} }
					/>
					<TextControl
						label={ __(
							'Maximum file size message',
							'jet-form-builder',
						) }
						value={ attributes.validation.messages.max_size }
						onChange={ max_size => {
							setAttributes( {
								validation: {
									messages: { max_size },
								},
							} );
						} }
						help={ __(
							`Use the %max_size% macro to display 
							the maximum allowed file size`,
							'jet-form-builder',
						) }
					/>
					<FormTokenField
						key="allowed_mimes"
						value={ attributes.allowed_mimes }
						label={ __( 'Allow MIME types', 'jet-form-builder' ) }
						suggestions={ localizeData.mime_types }
						onChange={ allowed_mimes => setAttributes(
							{ allowed_mimes } ) }
						tokenizeOnSpace
					/>
				</FieldSettingsWrapper>
				<PanelBody
					title={ __( 'Validation', 'jet-form-builder' ) }
				>
					<ValidationToggleGroup/>
					{ isAdvancedValidation && <>
						<ValidationBlockMessage name="max_files"/>
						<ValidationBlockMessage name="file_max_size"/>
					</> }
				</PanelBody>
				<AdvancedFields
					key={ uniqKey( 'AdvancedFields' ) }
					{ ...props }
				/>
			</InspectorControls>
		),
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<InputControl
					key={ uniqKey( 'place_holder_block_new' ) }
					type={ 'file' }
					disabled={ true }
				/>
			</FieldWrapper>
		</div>,
	];
}