const {
	      AdvancedModalControl,
	      ServerSideMacros,
      } = JetFBComponents;

/**
 * Internal dependencies
 */
const {
	      TextControl,
      } = wp.components;

function CallWebHookRender( { settings, label, onChangeSettingObj } ) {

	/* eslint-disable jsx-a11y/no-onchange */
	return <ServerSideMacros>
		<AdvancedModalControl
			value={ settings.webhook_url }
			label={ label( 'webhook_url' ) }
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
		</AdvancedModalControl>
	</ServerSideMacros>;
}

export default CallWebHookRender;
