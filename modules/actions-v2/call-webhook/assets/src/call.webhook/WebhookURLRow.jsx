import { useInstanceId } from '@wordpress/compose';
import {
	ControlWithErrorStyle, IconText, LabelWithActions,
	RequiredLabel,
	RowControl,
	RowControlEndStyle,
	StyledTextControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { Flex } from '@wordpress/components';
import { cx } from '@linaria/core';
import { useActionValidatorProvider } from 'jet-form-builder-actions';

const {
	      PresetButton,
	      MacrosFields,
      } = JetFBComponents;

function RedirectCustomUrl( { settings, onChangeSettingObj } ) {

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'webhook_url' === error?.property,
	} );

	const id = useInstanceId( RowControl, 'jfb-control' );

	return <RowControl createId={ false }>
		<LabelWithActions>
			<RequiredLabel htmlFor={ id }>
				{ __( 'Webhook URL', 'jet-form-builder' ) }
			</RequiredLabel>
			<PresetButton
				value={ settings.webhook_url }
				onChange={ webhook_url => onChangeSettingObj(
					{ webhook_url },
				) }
			/>
			<MacrosFields
				onClick={ name => onChangeSettingObj( {
					webhook_url: (
						settings.webhook_url ?? ''
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
			<StyledTextControl
				id={ id }
				value={ settings.webhook_url }
				onChange={ webhook_url => onChangeSettingObj(
					{ webhook_url },
				) }
				onBlur={ () => setShowError( true ) }
			/>
		</Flex>
	</RowControl>;
}

export default RedirectCustomUrl;
