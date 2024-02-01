const {
	      AdvancedModalControl,
      } = JetFBComponents;

/**
 * Internal dependencies
 */
const {
	      TextControl,
      } = wp.components;

// eslint-disable-next-line max-lines-per-function, complexity
function CallWebHookRender( { settings, label, onChangeSettingObj } ) {

	/* eslint-disable jsx-a11y/no-onchange */
	return <AdvancedModalControl
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
			onChange={ newVal => onChangeSettingObj(
				{ webhook_url: newVal },
			) }
		/> }
	</AdvancedModalControl>;
}

export default CallWebHookRender;
