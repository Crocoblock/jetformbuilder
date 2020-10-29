/**
 * Internal dependencies
 */
import Tools from "../tools/tools";

const {
	TextControl,
	TextareaControl,
	SelectControl,
	Button,
	Popover,
	PanelBody,
	PanelRow
} = wp.components;

const { __ } = wp.i18n;

const {
	useState
} = wp.element;

window.jetFormDefaultActions = window.jetFormDefaultActions || {};

window.jetFormDefaultActions['send_email'] = class SendEmailAction extends wp.element.Component {

	constructor( props ) {
		super( props );
		this.state = { showMacrosPopover: false };
	}

	render() {

		const settings = this.props.settings;
		const onChange = this.props.onChange;

		const onChangeValue = ( value, key ) => {

			onChange( {
				...settings,
				[ key ]: value
			} );

		};

		const formFields = Tools.getFormFieldsBlocks();

		const insertMacros = ( macros ) => {
			var content = settings.content || '';
			onChangeValue( content + '%' + macros + '%', 'content' );
		}

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <div key="send_email">
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
			<div className="jet-form-editor__macros-wrap">
				<TextareaControl
					key="content"
					value={ settings.content }
					label={ window.jetFormEmailData.labels.content }
					help={ window.jetFormEmailData.labels.content_help }
					onChange={ ( newValue ) => {
						onChangeValue( newValue, 'content' );
					} }
				/>
				<div className="jet-form-editor__macros-inserter">
					<Button
						isTertiary
						isSmall
						icon={ this.state.showMacrosPopover ? 'no-alt' : 'admin-tools' }
						label={ 'Insert macros' }
						className="jet-form-editor__macros-trigger"
						onClick={ () => {
							this.setState( { showMacrosPopover: ! this.state.showMacrosPopover } );
						} }
					/>
					{ this.state.showMacrosPopover && (
						<Popover
							position={ 'bottom left' }
						>
							{ formFields.length && <PanelBody title={ 'Form Fields' }>
								{ formFields.map( ( field ) => {
									return <div key={ 'field_' + field.value }>
										<Button
											isLink
											onClick={ () => { insertMacros( field.value ) } }
										>{ '%' + field.value + '%' }</Button>
									</div>;
								} ) }
							</PanelBody> }
							{ window.jetFormEmailData.customMacros && <PanelBody title={ 'Custom Macros' }>
								{ window.jetFormEmailData.customMacros.map( ( macros ) => {
									return <div key={ 'macros_' + macros }>
										<Button
											isLink
											onClick={ () => { insertMacros( macros ) } }
										>{ '%' + macros + '%' }</Button>
									</div>;
								} ) }
							</PanelBody> }
						</Popover>
					) }
				</div>
			</div>
		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}
}
