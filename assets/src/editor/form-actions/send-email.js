/**
 * Internal dependencies
 */
import Tools from "../helpers/tools";
import MacrosInserter from "../components/macros-inserter";
import { addAction } from "../helpers/action-helper";

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

addAction( 'send_email', class SendEmailAction extends wp.element.Component {

	constructor( props ) {
		super( props );
		this.state = { showMacrosPopover: false };
	}

	render() {
		const { settings, onChange, source, label, help } = this.props;

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
				labelPosition="side"
				className="full-width"
				value={ settings.mail_to }
				options={ source.mailTo }
				label={ label( 'mail_to' ) }
				help={ help( 'mail_to' ) }
				onChange={ ( newValue ) => {
					onChangeValue( newValue, 'mail_to' );
				} }
			/>
			{ 'custom' === settings.mail_to && <TextControl
				key="custom_email"
				value={ settings.custom_email }
				label={ label( 'custom_email' ) }
				help={ help( 'custom_email' ) }
				onChange={ ( newValue ) => {
					onChangeValue( newValue, 'custom_email' );
				} }
			/> }
			{ 'form' === settings.mail_to && <SelectControl
				key="from_field"
				labelPosition="side"
				className="full-width"
				value={ settings.from_field }
				options={ formFields }
				label={ label( 'from_field' ) }
				help={ help( 'from_field' ) }
				onChange={ ( newValue ) => {
					onChangeValue( newValue, 'from_field' );
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
					onChangeValue( newValue, 'reply_to' );
				} }
			/>
			{ 'custom' === settings.reply_to && <TextControl
				key="reply_to_email"
				value={ settings.reply_to_email }
				label={ label( 'reply_to_email' ) }
				help={ help( 'reply_to_email' ) }
				onChange={ ( newValue ) => {
					onChangeValue( newValue, 'reply_to_email' );
				} }
			/> }
			{ 'form' === settings.reply_to && <SelectControl
				key="reply_from_field"
				labelPosition="side"
				className="full-width"
				value={ settings.reply_from_field }
				options={ formFields }
				label={ label( 'reply_from_field' ) }
				help={ help( 'reply_from_field' ) }
				onChange={ ( newValue ) => {
					onChangeValue( newValue, 'reply_from_field' );
				} }
			/> }
			<TextControl
				key="subject"
				value={ settings.subject }
				label={ label( 'subject' ) }
				help={ help( 'subject' ) }
				onChange={ ( newValue ) => {
					onChangeValue( newValue, 'subject' );
				} }
			/>
			<TextControl
				key="from_name"
				value={ settings.from_name }
				label={ label( 'from_name' ) }
				help={ help( 'from_name' ) }
				onChange={ ( newValue ) => {
					onChangeValue( newValue, 'from_name' );
				} }
			/>
			<TextControl
				key="from_address"
				value={ settings.from_address }
				label={ label( 'from_address' ) }
				help={ help( 'from_address' ) }
				onChange={ ( newValue ) => {
					onChangeValue( newValue, 'from_address' );
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
				onChange={ ( newValue ) => onChangeValue( newValue, 'content_type' ) }
			/>
			<div className="jet-form-editor__macros-wrap">
				<TextareaControl
					key="content"
					value={ settings.content }
					label={ label( 'content' ) }
					help={ help( 'content' ) }
					onChange={ ( newValue ) => {
						onChangeValue( newValue, 'content' );
					} }
				/>
				<MacrosInserter
					fields={ formFields }
					onFieldClick={ insertMacros }
					customMacros={ source.customMacros }
				/>
			</div>
		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}
} );
