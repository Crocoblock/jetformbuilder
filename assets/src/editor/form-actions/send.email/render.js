const {
	      AdvancedModalControl,
      } = JetFBComponents;

const {
	      Tools: { withPlaceholder },
      } = JetFBActions;

const {
	      TextControl,
	      TextareaControl,
	      SelectControl,
	      FormTokenField,
	      BaseControl,
	      ToggleControl,
      } = wp.components;

const {
	      useState,
	      useEffect,
      } = wp.element;

const {
	      useFields,
      } = JetFBHooks;

// eslint-disable-next-line max-lines-per-function, complexity
function SendEmailRender( {
	settings,
	source,
	label,
	help,
	onChangeSetting,
	onChangeSettingObj,
} ) {

	const formFields = useFields();

	const [ formFieldsTokens, setFormFieldsTokens ] = useState( [] );

	useEffect( () => {
		setFormFieldsTokens( formFields.map( ( { value } ) => value ) );

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

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
		{ 'custom' === settings.reply_to && <AdvancedModalControl
			value={ settings.reply_to_email }
			label={ label( 'reply_to_email' ) }
			macroWithCurrent
			onChangeMacros={ name => onChangeSettingObj( {
				reply_to_email: (
					settings?.reply_to_email ?? ''
				) + name,
			} ) }
		>
			<TextControl
				value={ settings.reply_to_email }
				help={ help( 'reply_to_email' ) }
				onChange={ val => onChangeSettingObj(
					{ reply_to_email: val },
				) }
			/>
		</AdvancedModalControl> }
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
		<AdvancedModalControl
			value={ settings.subject }
			label={ label( 'subject' ) }
			macroWithCurrent
			onChangeMacros={ name => onChangeSettingObj( {
				subject: (
					settings?.subject ?? ''
				) + name,
			} ) }
		>
			<TextControl
				value={ settings.subject }
				help={ help( 'subject' ) }
				onChange={ subject => onChangeSettingObj( { subject } ) }
			/>
		</AdvancedModalControl>
		<AdvancedModalControl
			value={ settings.from_name }
			label={ label( 'from_name' ) }
			macroWithCurrent
			onChangeMacros={ name => onChangeSettingObj( {
				from_name: (
					settings?.from_name ?? ''
				) + name,
			} ) }
		>
			<TextControl
				value={ settings.from_name }
				help={ help( 'from_name' ) }
				onChange={ val => onChangeSettingObj(
					{ from_name: val },
				) }
			/>
		</AdvancedModalControl>
		<AdvancedModalControl
			value={ settings.from_address }
			label={ label( 'from_address' ) }
			macroWithCurrent
			onChangeMacros={ name => onChangeSettingObj( {
				from_address: (
					settings?.from_address ?? ''
				) + name,
			} ) }
		>
			<TextControl
				value={ settings.from_address }
				help={ help( 'from_address' ) }
				onChange={ val => onChangeSettingObj(
					{ from_address: val },
				) }
			/>
		</AdvancedModalControl>
		<SelectControl
			key="content_type"
			labelPosition="side"
			className="full-width"
			value={ settings.content_type }
			options={ source.content_type }
			label={ label( 'content_type' ) }
			help={ help( 'content_type' ) }
			onChange={ ( newValue ) => onChangeSetting( newValue,
				'content_type' ) }
		/>
		{ Boolean(
			!settings.content_type || 'text/html' === settings.content_type,
		) &&
		<ToggleControl
			label={ label( 'disable_format' ) }
			help={ help( 'disable_format' ) }
			checked={ settings.disable_format }
			onChange={ val => onChangeSettingObj(
				{ disable_format: val },
			) }
		/> }
		<AdvancedModalControl
			value={ settings.content }
			label={ label( 'content' ) }
			macroWithCurrent
			onChangeMacros={ name => onChangeSettingObj( {
				content: (
					settings?.content ?? ''
				) + name,
			} ) }
		>
			<TextareaControl
				value={ settings.content }
				help={ help( 'content' ) }
				onChange={ content => onChangeSettingObj( { content } ) }
			/>
		</AdvancedModalControl>
		{/* eslint-disable-next-line @wordpress/no-base-control-with-label-without-id */}
		<BaseControl
			label={ label( 'attachments' ) }
			className={ 'control-flex' }
		>
			<FormTokenField
				label={ label( 'add_attachment' ) }
				value={ settings.attachments }
				suggestions={ formFieldsTokens }
				onChange={ tokens => onChangeSettingObj(
					{ attachments: [ ...new Set( tokens ) ] } ) }
				tokenizeOnSpace
			/>
		</BaseControl>
	</>;
}

export default SendEmailRender;