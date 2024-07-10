import { __ } from '@wordpress/i18n';
import { ToggleControl, Flex } from '@wordpress/components';
import { ClearBaseControlStyle, WideLine } from 'jet-form-builder-components';
import MailToRow from './MailTo/MailToRow';
import CustomMailToRow from './MailTo/CustomMailToRow';
import FromFieldMailToRow from './MailTo/FromFieldMailToRow';
import ReplyToRow from './ReplyTo/ReplyToRow';
import EmailReplyToRow from './ReplyTo/EmailReplyToRow';
import FromFieldReplyToRow from './ReplyTo/FromFieldReplyToRow';
import SubjectRow from './SubjectRow';
import FromNameRow from './FromNameRow';
import FromAddressRow from './FromAddressRow';
import ContentTypeRow from './ContentTypeRow';
import ContentRow from './ContentRow';
import AttachmentsRow from './AttachmentsRow';

// eslint-disable-next-line max-lines-per-function
function SendEmailRender( {
	settings,
	onChangeSettingObj,
} ) {

	/* eslint-disable jsx-a11y/no-onchange */
	return <Flex direction="column">
		<MailToRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		{ 'custom' === settings.mail_to && <>
			<WideLine/>
			<CustomMailToRow
				settings={ settings }
				onChangeSettingObj={ onChangeSettingObj }
			/>
		</> }
		{ 'form' === settings.mail_to && <>
			<WideLine/>
			<FromFieldMailToRow
				settings={ settings }
				onChangeSettingObj={ onChangeSettingObj }
			/>
		</> }
		<WideLine/>
		<ReplyToRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		{ 'custom' === settings.reply_to && <>
			<WideLine/>
			<EmailReplyToRow
				settings={ settings }
				onChangeSettingObj={ onChangeSettingObj }
			/>
		</> }
		{ 'form' === settings.reply_to && <>
			<WideLine/>
			<FromFieldReplyToRow
				settings={ settings }
				onChangeSettingObj={ onChangeSettingObj }
			/>
		</> }
		<WideLine/>
		<SubjectRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		<WideLine/>
		<FromNameRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		<WideLine/>
		<FromAddressRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		<WideLine/>
		<ContentTypeRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		{ Boolean(
			!settings.content_type || 'text/html' === settings.content_type,
		) && <>
			<WideLine/>
			<ToggleControl
				className={ ClearBaseControlStyle }
				label={ __( 'Disable Auto-Formatting', 'jet-form-builder' ) }
				checked={ settings.disable_format }
				onChange={ val => onChangeSettingObj(
					{ disable_format: val },
				) }
				help={ __(
					'By default, each new line in the email content field is changed to a separate paragraph element. And each link turns into a clickable hyperlink. To prevent this, enable this option.',
					'jet-form-builder',
				) }
			/>
		</> }
		<WideLine/>
		<ContentRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		<WideLine/>
		<AttachmentsRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
	</Flex>;
}

export default SendEmailRender;