import {
	userAccess,
	valueFormats,
} from './options';
import preview from './preview';

const {
	ToolBarFields,
	GeneralFields,
	AdvancedFields,
	FieldWrapper,
	FieldSettingsWrapper,
	ValidationBlockMessage,
	ValidationToggleGroup,
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
	useBlockProps,
	InspectorControls,
} = wp.blockEditor;

const {
	SelectControl,
	ToggleControl,
	FormTokenField,
	TextControl,
	PanelBody,
} = wp.components;

const localizeData = window.jetFormMediaFieldData;

// eslint-disable-next-line max-lines-per-function
export default function MediaEdit(props) {

	const blockProps = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();
	useUniqueNameOnDuplicate();

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey, attrHelp },
	} = props;

	const isUserAccessEmpty = !attributes.allowed_user_cap;
	const attachmentIdFormats = ['id', 'ids', 'both'];

	const canDeleteUploadedAttachment = attributes.insert_attachment &&
		attachmentIdFormats.includes(attributes.value_format);

	if (attributes.isPreview) {
		return <div style={{
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		}}>
			{preview}
		</div>;
	}

	return [
		<ToolBarFields
			key={uniqKey('ToolBarFields')}
			{...props}
		/>,
		isSelected && (
			<InspectorControls
				key={uniqKey('InspectorControls')}
			>
				<GeneralFields />
				<FieldSettingsWrapper {...props}>
					<div
						className={[
							'jet-form-builder__user-access-control',
							isUserAccessEmpty
								? 'jet-form-builder__user-access-control--error'
								: '',
						].filter(Boolean).join(' ')}
					>
						<SelectControl
							key="allowed_user_cap"
							label={__('User access', 'jet-form-builder')}
							labelPosition="top"
							value={attributes.allowed_user_cap}
							onChange={(newValue) => {
								setAttributes({
									allowed_user_cap: newValue,
								});
							}}
							options={userAccess}
							required
							help={
								isUserAccessEmpty
									? __(
										'Please select who is allowed to upload files.',
										'jet-form-builder',
									)
									: undefined
							}
						/>
					</div>
					{'any_user' !== attributes.allowed_user_cap && <>
						<ToggleControl
							key="insert_attachment"
							label={__(
								'Insert attachment',
								'jet-form-builder',
							)}
							checked={attributes.insert_attachment}
							help={attrHelp('insert_attachment')}
							onChange={(newValue) => {
								const insertAttachment = Boolean(newValue);

								setAttributes({
									insert_attachment: insertAttachment,
									delete_uploaded_attachment: insertAttachment
										? attributes.delete_uploaded_attachment
										: false,
								});
							}}
						/>
						{attributes.insert_attachment && <>
							<SelectControl
								key="value_format"
								label={__('Field value', 'jet-form-builder')}
								labelPosition="top"
								value={attributes.value_format}
								onChange={(newValue) => {
									setAttributes({
										value_format: newValue,
										delete_uploaded_attachment: attachmentIdFormats.includes(newValue)
											? attributes.delete_uploaded_attachment
											: false,
									});
								}}
								options={valueFormats}
								help={__(
									'If you\'re using this field for an ACF Gallery, always select **Array of attachment IDs**. For JetEngine, match the format used in the corresponding JetEngine meta field.',
									'jet-form-builder'
								)}
							/>
							{canDeleteUploadedAttachment && (
								<ToggleControl
									key="delete_uploaded_attachment"
									label={__(
										'Delete removed attachments',
										'jet-form-builder'
									)}
									checked={attributes.delete_uploaded_attachment}
									help={__(
										'Permanently deletes old attachments from the Media Library after the form is submitted. Enable only if these files are not used anywhere else.',
										'jet-form-builder'
									)}
									onChange={(newValue) => {
										setAttributes({
											delete_uploaded_attachment: Boolean(newValue),
										});
									}}
								/>
							)}
						</>}
					</>}
					<AdvancedInspectorControl
						value={attributes.max_files}
						label={__(
							'Maximum allowed files to upload',
							'jet-form-builder',
						)}
						onChangePreset={val => setAttributes(
							{ max_files: val },
						)}
					>
						{({ instanceId }) => <TextControl
							id={instanceId}
							className="jet-fb m-unset"
							value={attributes.max_files}
							onChange={val => setAttributes(
								{ max_files: val },
							)}
						/>}
					</AdvancedInspectorControl>
					<AttributeHelp name="max_files">
						{__(
							'If not set allow to upload 1 file.',
							'jet-form-builder',
						)}
					</AttributeHelp>
					<AdvancedInspectorControl
						value={attributes.max_size}
						label={__(
							'Maximum size in Mb',
							'jet-form-builder',
						)}
						onChangePreset={val => setAttributes(
							{ max_size: val })}
					>
						{({ instanceId }) => <TextControl
							id={instanceId}
							className="jet-fb m-unset"
							value={attributes.max_size}
							onChange={val => setAttributes(
								{ max_size: val },
							)}
						/>}
					</AdvancedInspectorControl>
					<AttributeHelp name="max_size" />
					<TextControl
						label={__(
							'Maximum file size message',
							'jet-form-builder',
						)}
						value={attributes?.validation?.messages?.max_size ??
							__('Maximum file size: %max_size%', 'jet-form-builder')}
						onChange={val => {
							setAttributes({
								validation: {
									messages: { max_size: val },
								},
							});
						}}
						help={__(
							'Use the %max_size% macro to display the maximum allowed file size',
							'jet-form-builder',
						)}
					/>
					<FormTokenField
						key="allowed_mimes"
						value={attributes.allowed_mimes}
						label={__('Allow MIME types', 'jet-form-builder')}
						suggestions={localizeData.mime_types}
						onChange={val => setAttributes(
							{ allowed_mimes: val },
						)}
						tokenizeOnSpace
					/>
				</FieldSettingsWrapper>
				<PanelBody
					title={__('Validation', 'jet-form-builder')}
				>
					<ValidationToggleGroup />
					{isAdvancedValidation && <>
						<ValidationBlockMessage name="max_files" />
						<ValidationBlockMessage name="file_max_size" />
						{Boolean(attributes.allowed_mimes.length) && (
							<ValidationBlockMessage name="file_ext" />
						)}
					</>}
				</PanelBody>
				<AdvancedFields
					key={uniqKey('AdvancedFields')}
					{...props}
				/>
			</InspectorControls>
		),
		<div {...blockProps} key={uniqKey('viewBlock')}>
			<FieldWrapper
				key={uniqKey('FieldWrapper')}
				{...props}
			>
				<div className="jet-form-builder__field-wrap jet-form-builder-file-upload">
					<div className="jet-form-builder-file-upload__content">
						<div className="jet-form-builder-file-upload__files">
							<div className="jet-form-builder-file-upload__file">
								<img
									src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'%3E%3Cpath fill='%23e2e8f0' d='M0 0h160v100H0z'/%3E%3Ccircle cx='120' cy='25' r='12' fill='%2394a3b8'/%3E%3Cpath fill='%2364748b' d='m0 100 50-65 40 45 25-25 45 45z'/%3E%3C/svg%3E"
									alt={__('File preview', 'jet-form-builder')}
								/>
							</div>
						</div>
					</div>
					<div className="jet-form-builder-file-upload__fields">
						<input type="file" className="jet-form-builder__field jet-form-builder-file-upload__input" tabIndex={-1} onClick={event => event.preventDefault()} aria-label={__('Upload file preview', 'jet-form-builder')} />
					</div>
					<div className="jet-form-builder-file-upload__message">
							<small>{(attributes?.validation?.messages?.max_size ?? __('Maximum file size: %max_size%', 'jet-form-builder')).replace('%max_size%', `${attributes.max_size || '…'} MB`)}</small>
					</div>
				</div>
			</FieldWrapper>
		</div>,
	];
}
