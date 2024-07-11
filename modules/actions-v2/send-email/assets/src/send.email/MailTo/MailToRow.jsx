import {
	RequiredLabel,
	RowControl,
	RowControlEnd,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import { useActionValidatorProvider } from 'jet-form-builder-actions';

const emailOptions = [
	{
		value: '',
		label: '--',
	},
	{
		value: 'admin',
		label: __( 'Admin email', 'jet-form-builder' ),
	},
	{
		value: 'form',
		label: __( 'Email from submitted form field', 'jet-form-builder' ),
	},
	{
		value: 'custom',
		label: __( 'Custom email', 'jet-form-builder' ),
	},
];

function MailToRow( { settings, onChangeSettingObj } ) {

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'mail_to' === error?.property,
	} );

	return <RowControl>
		{ ( { id } ) => <>
			<RequiredLabel htmlFor={ id }>
				{ __( 'Mail To', 'jet-form-builder' ) }
			</RequiredLabel>
			<RowControlEnd hasError={ hasError }>
				<SelectControl
					id={ id }
					value={ settings.mail_to }
					options={ emailOptions }
					onChange={ mailTo => onChangeSettingObj(
						{ mail_to: mailTo },
					) }
					onBlur={ () => setShowError( true ) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</RowControlEnd>
		</> }
	</RowControl>;
}

export default MailToRow;