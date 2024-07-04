import {
	ControlWithErrorStyle, IconText,
	RequiredLabel,
	RowControl,
	RowControlEndStyle,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { TextControl, Flex } from '@wordpress/components';
import { useActionValidatorProvider } from 'jet-form-builder-actions';
import { cx } from '@linaria/core';

function CustomMailToRow( { settings, onChangeSettingObj } ) {

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'custom_email' === error?.property,
	} );

	return <RowControl>
		{ ( { id } ) => <>
			<RequiredLabel htmlFor={ id }>
				{ __( 'Email Address', 'jet-form-builder' ) }
			</RequiredLabel>
			<Flex
				className={ cx(
					RowControlEndStyle,
					hasError && ControlWithErrorStyle,
				) }
				direction="column"
			>
				{ hasError && <IconText>
					{ __(
						'Please fill this required field',
						'jet-form-builder',
					) }
				</IconText> }
				<TextControl
					id={ id }
					value={ settings.custom_email }
					onChange={ custom_email => onChangeSettingObj(
						{ custom_email } ) }
					onBlur={ () => setShowError( true ) }
					help={ __(
						'To apply multiple mailing addresses, separate them with commas',
						'jet-form-builder',
					) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</Flex>
		</> }
	</RowControl>;
}

export default CustomMailToRow;