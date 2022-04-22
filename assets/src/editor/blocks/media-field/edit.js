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
} = JetFBComponents;

const { __ } = wp.i18n;

const {
	useBlockProps,
	InspectorControls,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	SelectControl,
	ToggleControl,
	PanelBody,
	__experimentalNumberControl,
	__experimentalInputControl,
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

	const blockProps = useBlockProps();

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey, attrHelp },
	} = props;

	const canEditFormat = attributes.save_upload && 'any_user' !== attributes.allowed_user_cap;

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
						key='allowed_user_cap'
						label={ __( 'User access' ) }
						labelPosition='top'
						value={ attributes.allowed_user_cap }
						onChange={ ( newValue ) => {
							setAttributes( { allowed_user_cap: newValue } );
						} }
						options={ userAccess }
					/>
					<ToggleControl
						key='save_upload'
						label={ __( 'Save to upload folder' ) }
						checked={ attributes.save_upload }
						onChange={ ( newValue ) => {
							setAttributes( { save_upload: Boolean( newValue ) } );
						} }
					/>
					{ canEditFormat && <>
						<ToggleControl
							key='insert_attachment'
							label={ __( 'Insert attachment' ) }
							checked={ attributes.insert_attachment }
							help={ attrHelp( 'insert_attachment' ) }
							onChange={ ( newValue ) => {
								setAttributes( { insert_attachment: Boolean( newValue ) } );
							} }
						/>
						{ attributes.insert_attachment && <SelectControl
							key='value_format'
							label={ __( 'Field value' ) }
							labelPosition='top'
							value={ attributes.value_format }
							onChange={ ( newValue ) => {
								props.setAttributes( { value_format: newValue } );
							} }
							options={ valueFormats }
						/> }
					</> }
					<NumberControl
						key='max_files'
						label={ __( 'Maximum allowed files to upload' ) }
						labelPosition='top'
						help={ attrHelp( 'max_files' ) }
						value={ attributes.max_files }
						onChange={ ( newValue ) => {
							props.setAttributes( { max_files: parseInt( newValue ) } );
						} }
					/>
					<NumberControl
						label={ __( 'Maximum size in Mb' ) }
						labelPosition='top'
						key='max_size'
						help={ attrHelp( 'max_size' ) }
						value={ attributes.max_size }
						step={ 0.01 }
						onChange={ newValue => {
							props.setAttributes( { max_size: Number( newValue ) } );
						} }
					/>
					<SelectControl
						multiple
						className='field-mime-types'
						key='allowed_mimes'
						label={ __( 'Allow MIME types' ) }
						labelPosition='top'
						help={ attrHelp( 'allowed_mimes' ) }
						value={ attributes.allowed_mimes }
						onChange={ ( newValue ) => {
							props.setAttributes( { allowed_mimes: newValue } );
						} }
						options={ localizeData.mime_types }
					/>
				</FieldSettingsWrapper>
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