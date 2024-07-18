import { __ } from '@wordpress/i18n';
import { ToggleControl, Flex } from '@wordpress/components';
import {
	ClearBaseControlStyle,
	WideLine,
} from 'jet-form-builder-components';
import EmailReplyToRow from './EmailReplyToRow';
import SubjectRow from './SubjectRow';
import FromNameRow from './FromNameRow';
import FromAddressRow from './FromAddressRow';
import ContentRow from './ContentRow';
import AttachmentsRow from './AttachmentsRow';
import { useFields } from 'jet-form-builder-blocks-to-actions';
import {
	ValidatedSelectControl,
} from 'jet-form-builder-actions';
import {
	contentTypeHelp,
	emailOptions,
	formatOptions,
	replyToHelp,
} from './source';
import MailToFields from './MailToFields';
import CCFields from './CCFields';

// eslint-disable-next-line max-lines-per-function
function SendEmailRender( props ) {

	const {
		      settings,
		      onChangeSettingObj,
	      } = props;

	const formFields = useFields( {
		withInner: false,
		placeholder: '--',
	} );

	/* eslint-disable jsx-a11y/no-onchange */
	return <Flex direction="column">
		<MailToFields { ...props }/>
		<WideLine/>
		<ToggleControl
			className={ ClearBaseControlStyle }
			label={ __( 'Use CC/BCC', 'jet-form-builder' ) }
			checked={ settings.use_cc_bcc }
			onChange={ val => onChangeSettingObj(
				{ use_cc_bcc: val },
			) }
		/>
		{ settings.use_cc_bcc && <>
			<WideLine/>
			<CCFields { ...props }/>
		</> }
		<WideLine/>
		<ValidatedSelectControl
			label={ __( 'Reply To', 'jet-form-builder' ) }
			value={ settings.reply_to }
			onChange={ val => onChangeSettingObj( { reply_to: val } ) }
			options={ emailOptions }
			help={ replyToHelp[ settings.reply_to ] ?? '' }
		/>
		{ 'custom' === settings.reply_to && <>
			<WideLine/>
			<EmailReplyToRow { ...props }/>
		</> }
		{ 'form' === settings.reply_to && <>
			<WideLine/>
			<ValidatedSelectControl
				label={ __( 'Reply To Email From Field', 'jet-form-builder' ) }
				value={ settings.reply_from_field }
				onChange={ val => onChangeSettingObj( {
					reply_from_field: val,
				} ) }
				options={ formFields }
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
		<ValidatedSelectControl
			label={ __( 'Content type', 'jet-form-builder' ) }
			value={ settings.content_type }
			onChange={ val => onChangeSettingObj( {
				content_type: val,
			} ) }
			options={ formatOptions }
			help={ contentTypeHelp[ settings.content_type ] ?? '' }
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