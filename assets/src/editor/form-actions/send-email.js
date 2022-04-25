/**
 * Internal dependencies
 */

const {
	MacrosInserter,
} = JetFBComponents;

const {
	addAction,
	getFormFieldsBlocks,
	Tools: { withPlaceholder },
} = JetFBActions;

const {
	TextControl,
	TextareaControl,
	SelectControl,
	FormTokenField,
	BaseControl,
} = wp.components;

const {
	useState,
	useEffect,
} = wp.element;

const { withRequestFields } = JetFBHooks;

const { withSelect } = wp.data;

function SendEmailAction( {
	settings,
	source,
	label,
	help,
	onChangeSetting,
	onChangeSettingObj,
	requestFields,
} ) {

	const [ formFields, setFormFields ] = useState( [] );
	const [ formFieldsTokens, setFormFieldsTokens ] = useState( [] );

	useEffect( () => {
		const fields = [ ...getFormFieldsBlocks(), ...requestFields ];
		setFormFields( fields );

		setFormFieldsTokens( fields.map( ( { value } ) => value ) );
	}, [] );

	const insertMacros = ( macros ) => {
		const content = (
			                settings.content || ''
		                ) + '%' + macros + '%';
		onChangeSetting( content, 'content' );
	};

	/* eslint-disable jsx-a11y/no-onchange */
	return <>
		<SelectControl
			key="mail_to"
			labelPosition="side"
			className="full-width"
			value={ settings.mail_to }
			options={ source.mailTo }
			label={ label( 'mail_to' ) }
			help={ help( 'mail_to' ) }
			onChange={ ( newValue ) => {
				onChangeSetting( newValue, 'mail_to' );
			} }
		/>
		{ 'custom' === settings.mail_to && <TextControl
			key="custom_email"
			value={ settings.custom_email }
			label={ label( 'custom_email' ) }
			help={ help( 'custom_email' ) }
			onChange={ ( newValue ) => {
				onChangeSetting( newValue, 'custom_email' );
			} }
		/> }
		{ 'form' === settings.mail_to && <SelectControl
			key="from_field"
			labelPosition="side"
			className="full-width"
			value={ settings.from_field }
			options={ withPlaceholder( formFields ) }
			label={ label( 'from_field' ) }
			help={ help( 'from_field' ) }
			onChange={ ( newValue ) => {
				onChangeSetting( newValue, 'from_field' );
			} }
		/> }
		<SelectControl
			key="reply_to"
			labelPosition="side"
			className="full-width"
			value={ settings.reply_to }
			options={ source.replyTo }
			label={ label( 'reply_to' ) }
			help={ help( 'reply_to' ) }
			onChange={ ( newValue ) => {
				onChangeSetting( newValue, 'reply_to' );
			} }
		/>
		{ 'custom' === settings.reply_to && <TextControl
			key="reply_to_email"
			value={ settings.reply_to_email }
			label={ label( 'reply_to_email' ) }
			help={ help( 'reply_to_email' ) }
			onChange={ ( newValue ) => {
				onChangeSetting( newValue, 'reply_to_email' );
			} }
		/> }
		{ 'form' === settings.reply_to && <SelectControl
			key="reply_from_field"
			labelPosition="side"
			className="full-width"
			value={ settings.reply_from_field }
			options={ withPlaceholder( formFields ) }
			label={ label( 'reply_from_field' ) }
			help={ help( 'reply_from_field' ) }
			onChange={ ( newValue ) => {
				onChangeSetting( newValue, 'reply_from_field' );
			} }
		/> }
		<TextControl
			key="subject"
			value={ settings.subject }
			label={ label( 'subject' ) }
			help={ help( 'subject' ) }
			onChange={ ( newValue ) => {
				onChangeSetting( newValue, 'subject' );
			} }
		/>
		<TextControl
			key="from_name"
			value={ settings.from_name }
			label={ label( 'from_name' ) }
			help={ help( 'from_name' ) }
			onChange={ ( newValue ) => {
				onChangeSetting( newValue, 'from_name' );
			} }
		/>
		<TextControl
			key="from_address"
			value={ settings.from_address }
			label={ label( 'from_address' ) }
			help={ help( 'from_address' ) }
			onChange={ ( newValue ) => {
				onChangeSetting( newValue, 'from_address' );
			} }
		/>
		<SelectControl
			key="content_type"
			labelPosition="side"
			className="full-width"
			value={ settings.content_type }
			options={ source.content_type }
			label={ label( 'content_type' ) }
			help={ help( 'content_type' ) }
			onChange={ ( newValue ) => onChangeSetting( newValue, 'content_type' ) }
		/>
		<div className="jet-form-editor__macros-wrap">
			<TextareaControl
				key="content"
				value={ settings.content }
				label={ label( 'content' ) }
				help={ help( 'content' ) }
				onChange={ ( newValue ) => {
					onChangeSetting( newValue, 'content' );
				} }
			/>
			<MacrosInserter
				fields={ formFields }
				onFieldClick={ insertMacros }
				customMacros={ source.customMacros }
				zIndex={ 10000000 }
			/>
		</div>
		<BaseControl
			label={ label( 'attachments' ) }
			className={ 'control-flex' }
		>
			<FormTokenField
				value={ settings.attachments }
				suggestions={ formFieldsTokens }
				onChange={ tokens => onChangeSettingObj( { attachments: [ ...new Set( tokens ) ] } ) }
				tokenizeOnSpace
			/>
		</BaseControl>
	</>;
	/* eslint-enable jsx-a11y/no-onchange */
}

addAction( 'send_email', withSelect( withRequestFields )( SendEmailAction ) );
