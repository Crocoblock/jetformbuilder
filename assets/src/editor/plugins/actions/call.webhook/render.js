import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';

const {
	      AdvancedModalControl,
      } = JetFBComponents;

function CallWebHookRender( { settings, label, onChangeSettingObj } ) {

	/* eslint-disable jsx-a11y/no-onchange */
	return <AdvancedModalControl
		value={ settings.webhook_url }
		label={ __( 'Webhook URL:', 'jet-form-builder' ) }
		macroWithCurrent
		onChangeMacros={ name => onChangeSettingObj( {
			webhook_url: (
				settings.webhook_url ?? ''
			) + name,
		} ) }
	>
		{ ( { instanceId } ) => <TextControl
			id={ instanceId }
			value={ settings.webhook_url }
			onChange={ webhook_url => onChangeSettingObj(
				{ webhook_url },
			) }
		/> }
	</AdvancedModalControl>;
}

export default CallWebHookRender;
