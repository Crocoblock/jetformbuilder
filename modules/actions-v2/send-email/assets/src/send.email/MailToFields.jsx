import {
	ValidatedSelectControl,
	ValidatedTextControl,
} from 'jet-form-builder-actions';
import { __ } from '@wordpress/i18n';
import { emailOptions, emailOptionsHelp } from './source';
import { WideLine } from 'jet-form-builder-components';
import { useFields } from 'jet-form-builder-blocks-to-actions';

function MailToFields( { settings, onChangeSettingObj } ) {

	const formFields = useFields( {
		withInner: false,
		placeholder: '--',
	} );

	return <>
		<ValidatedSelectControl
			value={ settings.mail_to }
			onChange={ val => onChangeSettingObj( { mail_to: val } ) }
			isErrorSupported={ error => 'mail_to' === error?.property }
			label={ __( 'Mail To', 'jet-form-builder' ) }
			help={ emailOptionsHelp[ settings.mail_to ] }
			options={ emailOptions }
			required
		/>
		{ 'custom' === settings.mail_to && <>
			<WideLine/>
			<ValidatedTextControl
				label={ __( 'Email Address', 'jet-form-builder' ) }
				help={ __(
					'To apply multiple mailing addresses, separate them with commas',
					'jet-form-builder',
				) }
				value={ settings.custom_email }
				onChange={ val => onChangeSettingObj( { custom_email: val } ) }
				required
			/>
		</> }
		{ 'form' === settings.mail_to && <>
			<WideLine/>
			<ValidatedSelectControl
				label={ __( 'From field', 'jet-form-builder' ) }
				help={ __(
					'To apply multiple mailing addresses, you can select a "Checkbox Field" or a "Select field" with enabled "Is multiple" option.',
					'jet-form-builder',
				) }
				value={ settings.from_field }
				onChange={ val => onChangeSettingObj( { from_field: val } ) }
				options={ formFields }
				isErrorSupported={ error => 'from_field' === error?.property }
				required
			/>
		</> }
	</>;
}

export default MailToFields;