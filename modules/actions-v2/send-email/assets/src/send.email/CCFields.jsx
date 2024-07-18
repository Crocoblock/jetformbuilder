import {
	ValidatedSelectControl,
	ValidatedTextControl,
} from 'jet-form-builder-actions';
import { __ } from '@wordpress/i18n';
import { emailOptions, emailOptionsHelp } from './source';
import { WideLine } from 'jet-form-builder-components';
import { useFields } from 'jet-form-builder-blocks-to-actions';

function CCFields( { settings, onChangeSettingObj } ) {

	const formFields = useFields( {
		withInner: false,
		placeholder: '--',
	} );

	return <>
		<ValidatedSelectControl
			value={ settings.cc_from }
			onChange={ val => onChangeSettingObj( { cc_from: val } ) }
			label={ __( 'CC Address from', 'jet-form-builder' ) }
			options={ emailOptions }
			help={ emailOptionsHelp[ settings.cc_from ] }
		/>
		{ 'custom' === settings.cc_from && <>
			<WideLine/>
			<ValidatedTextControl
				label={ __( 'CC Email Address', 'jet-form-builder' ) }
				help={ __(
					'To apply multiple mailing addresses, separate them with commas',
					'jet-form-builder',
				) }
				value={ settings.cc_email }
				onChange={ val => onChangeSettingObj( { cc_email: val } ) }
				isErrorSupported={ error => 'cc_email' === error?.property }
				required
			/>
		</> }
		{ 'form' === settings.cc_from && <>
			<WideLine/>
			<ValidatedSelectControl
				label={ __( 'CC Address From field', 'jet-form-builder' ) }
				help={ __(
					'To apply multiple mailing addresses, you can select a "Checkbox Field" or a "Select field" with enabled "Is multiple" option.',
					'jet-form-builder',
				) }
				value={ settings.cc_field }
				onChange={ val => onChangeSettingObj( { cc_field: val } ) }
				options={ formFields }
				isErrorSupported={ error => 'cc_field' === error?.property }
				required
			/>
		</> }
		<WideLine/>
		<ValidatedSelectControl
			value={ settings.bcc_from }
			onChange={ val => onChangeSettingObj( { bcc_from: val } ) }
			label={ __( 'BCC Address from', 'jet-form-builder' ) }
			options={ emailOptions }
			help={ emailOptionsHelp[ settings.bcc_from ] }
		/>
		{ 'custom' === settings.bcc_from && <>
			<WideLine/>
			<ValidatedTextControl
				label={ __( 'BCC Email Address', 'jet-form-builder' ) }
				help={ __(
					'To apply multiple mailing addresses, separate them with commas',
					'jet-form-builder',
				) }
				value={ settings.bcc_email }
				onChange={ val => onChangeSettingObj( { bcc_email: val } ) }
				isErrorSupported={ error => 'bcc_email' ===
					error?.property }
				required
			/>
		</> }
		{ 'form' === settings.bcc_from && <>
			<WideLine/>
			<ValidatedSelectControl
				label={ __( 'BCC Address From field', 'jet-form-builder' ) }
				help={ __(
					'To apply multiple mailing addresses, you can select a "Checkbox Field" or a "Select field" with enabled "Is multiple" option.',
					'jet-form-builder',
				) }
				value={ settings.bcc_field }
				onChange={ val => onChangeSettingObj( { bcc_field: val } ) }
				options={ formFields }
				isErrorSupported={ error => 'bcc_field' ===
					error?.property }
				required
			/>
		</> }
	</>
}

export default CCFields;