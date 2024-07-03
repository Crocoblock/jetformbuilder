import {
	ControlWithErrorStyle, IconText,
	RequiredLabel,
	RowControl,
	RowControlEndStyle,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { SelectControl, Flex } from '@wordpress/components';
import { useActionValidatorProvider } from 'jet-form-builder-actions';
import { cx } from '@linaria/core';

function RoleCanRegisterRow( { settings, onChangeSettingObj } ) {

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'role_can_register' === error?.property,
	} );

	return <RowControl>
		{ ( { id } ) => <>
			<RequiredLabel htmlFor={ id }>
				{ __( 'Who can add new user?', 'jet-form-builder' ) }
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
				<SelectControl
					id={ id }
					value={ settings.role_can_register }
					options={ JetFBRegisterAction.allUserRoles }
					onChange={ role_can_register => onChangeSettingObj(
						{ role_can_register },
					) }
					onBlur={ () => setShowError( true ) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</Flex>
		</> }
	</RowControl>;
}

export default RoleCanRegisterRow;