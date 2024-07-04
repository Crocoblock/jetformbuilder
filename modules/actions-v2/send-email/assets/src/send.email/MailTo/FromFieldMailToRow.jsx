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
import { useFields } from 'jet-form-builder-blocks-to-actions';

function FromFieldMailToRow( { settings, onChangeSettingObj } ) {

	const formFields = useFields( { withInner: false } );

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'from_field' === error?.property,
	} );

	return <RowControl>
		{ ( { id } ) => <>
			<RequiredLabel htmlFor={ id }>
				{ __( 'From field', 'jet-form-builder' ) }
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
					value={ settings.from_field }
					options={ [
						{ value: '', label: '--' },
						...formFields,
					] }
					onChange={ from_field => onChangeSettingObj(
						{ from_field } ) }
					onBlur={ () => setShowError( true ) }
					help={ __(
						'To apply multiple mailing addresses, you can select a "Checkbox Field" or a "Select field" with enabled "Is multiple" option.',
						'jet-form-builder',
					) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</Flex>
		</> }
	</RowControl>;
}

export default FromFieldMailToRow;