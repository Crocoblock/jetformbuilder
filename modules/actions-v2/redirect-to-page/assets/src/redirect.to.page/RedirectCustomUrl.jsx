import { useInstanceId } from '@wordpress/compose';
import {
	ControlWithErrorStyle, IconText, LabelWithActions,
	RequiredLabel,
	RowControl,
	RowControlEndStyle,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { Flex, TextControl } from '@wordpress/components';
import { cx } from '@linaria/core';
import { useActionValidatorProvider } from 'jet-form-builder-actions';

const {
	      PresetButton,
	      MacrosFields,
      } = JetFBComponents;

function RedirectCustomUrl( { settings, onChangeSettingObj } ) {

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'redirect_url' === error?.property,
	} );

	const id = useInstanceId( RowControl, 'jfb-control' );

	return <RowControl createId={ false }>
		<LabelWithActions>
			<RequiredLabel htmlFor={ id }>
				{ __( 'Redirect URL', 'jet-form-builder' ) }
			</RequiredLabel>
			<PresetButton
				value={ settings.redirect_url }
				onChange={ redirect_url => onChangeSettingObj(
					{ redirect_url },
				) }
			/>
			<MacrosFields
				onClick={ name => onChangeSettingObj( {
					redirect_url: (
						settings.redirect_url ?? ''
					) + name,
				} ) }
				withCurrent
			/>
		</LabelWithActions>
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
				value={ settings.redirect_url }
				onChange={ redirect_url => onChangeSettingObj(
					{ redirect_url },
				) }
				onBlur={ () => setShowError( true ) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</Flex>
	</RowControl>;
}

export default RedirectCustomUrl;
