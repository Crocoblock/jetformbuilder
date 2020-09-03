/**
 * Internal dependencies
 */
const {
	TextControl,
	TextareaControl,
	SelectControl
} = wp.components;

const { __ } = wp.i18n;

window.jetFormDefaultActions = window.jetFormDefaultActions || {};
window.jetFormDefaultActions['send_email'] = window.jetFormDefaultActions['send_email'] || {};

window.jetFormDefaultActions['send_email'] = function( action, onChange ) {

	const result = {};
	const onChangeValue = ( value, key ) => {
		result[ key ] = value;
		onChange( result );
	};

	const settings = action.settings;
	const formFields = []
	const blocksRecursiveIterator = ( blocks ) => {

		blocks = blocks || wp.data.select( 'core/editor' ).getBlocks();

		blocks.map( ( block ) => {

			if ( block.name.includes( 'jet-forms/' ) && block.attributes.name ) {
				formFields.push( {
					value: block.attributes.name,
					label: block.attributes.label || block.attributes.name,
				} );
			}

			if ( block.innerBlocks.length ) {
				blocksRecursiveIterator( block.innerBlocks );
			}

		} );

	};

	blocksRecursiveIterator();

	/* eslint-disable jsx-a11y/no-onchange */
	return <div key="send_email">
		<SelectControl
			key="mail_to"
			value={ settings.mail_to }
			options={ window.jetFormEmailData.mailTo }
			label={ window.jetFormEmailData.labels.mail_to }
			help={ window.jetFormEmailData.labels.mail_to_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'mail_to' );
			} }
		/>
		{ 'custom' === settings.mail_to && <TextControl
			key="custom_email"
			value={ settings.custom_email }
			label={ window.jetFormEmailData.labels.custom_email }
			help={ window.jetFormEmailData.labels.custom_email_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'custom_email' );
			} }
		/> }
		{ 'form' === settings.mail_to && <SelectControl
			key="from_field"
			value={ settings.from_field }
			options={ formFields }
			label={ window.jetFormEmailData.labels.from_field }
			help={ window.jetFormEmailData.labels.from_field_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'custom_email' );
			} }
		/> }
		<SelectControl
			key="reply_to"
			value={ settings.reply_to }
			options={ window.jetFormEmailData.replyTo }
			label={ window.jetFormEmailData.labels.reply_to }
			help={ window.jetFormEmailData.labels.reply_to_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'reply_to' );
			} }
		/>
		{ 'custom' === settings.reply_to && <TextControl
			key="reply_to_email"
			value={ settings.reply_to_email }
			label={ window.jetFormEmailData.labels.reply_to_email }
			help={ window.jetFormEmailData.labels.reply_to_email_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'reply_to_email' );
			} }
		/> }
		{ 'form' === settings.reply_to && <SelectControl
			key="reply_from_field"
			value={ settings.reply_from_field }
			options={ formFields }
			label={ window.jetFormEmailData.labels.reply_from_field }
			help={ window.jetFormEmailData.labels.reply_from_field_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'reply_from_field' );
			} }
		/> }
		<TextControl
			key="subject"
			value={ settings.subject }
			label={ window.jetFormEmailData.labels.subject }
			help={ window.jetFormEmailData.labels.subject_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'subject' );
			} }
		/>
		<TextControl
			key="from_name"
			value={ settings.from_name }
			label={ window.jetFormEmailData.labels.from_name }
			help={ window.jetFormEmailData.labels.from_name_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'from_name' );
			} }
		/>
		<TextControl
			key="from_address"
			value={ settings.from_address }
			label={ window.jetFormEmailData.labels.from_address }
			help={ window.jetFormEmailData.labels.from_address_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'from_address' );
			} }
		/>
		<TextareaControl
			key="content"
			value={ settings.content }
			label={ window.jetFormEmailData.labels.content }
			help={ window.jetFormEmailData.labels.content_help }
			onChange={ ( newValue ) => {
				onChangeValue( newValue, 'content' );
			} }
		/>
	</div>;
	/* eslint-enable jsx-a11y/no-onchange */
}
