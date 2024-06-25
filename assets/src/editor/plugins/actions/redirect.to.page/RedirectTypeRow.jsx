import {
	ControlWithErrorStyle, IconText,
	RequiredLabel,
	RowControlEndStyle,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { Flex, SelectControl } from '@wordpress/components';
import { cx } from '@linaria/core';
import useRedirectTypes
	from './useRedirectTypes';
import { useInstanceId } from '@wordpress/compose';

const { useFields, useActionValidatorProvider } = JetFBHooks;

function RedirectTypeRow( { settings, onChangeSettingObj } ) {
	const fields        = useFields( { withInner: false } );
	const redirectTypes = useRedirectTypes( { fields } );
	const id            = useInstanceId( RowControl, 'jfb-control' );

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'redirect_type' === error?.property,
	} );

	return <RowControl createId={ false }>
		<RequiredLabel htmlFor={ id }>
			{ __( 'Redirect to', 'jet-form-builder' ) }
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
				value={ settings.redirect_type }
				options={ [
					{
						value: '',
						label: __( 'Set a redirect to...',
							'jet-form-builder' ),
					},
					...redirectTypes,
				] }
				onChange={ redirect_type => onChangeSettingObj(
					{ redirect_type },
				) }
				onBlur={ () => setShowError( true ) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</Flex>
	</RowControl>;
}

export default RedirectTypeRow;