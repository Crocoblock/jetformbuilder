const {
	      getFormFieldsBlocks,
      } = JetFBActions;
const {
	      AdvancedModalControl,
      } = JetFBComponents;

/**
 * Internal dependencies
 */
const {
	      TextControl,
      } = wp.components;

class CallWebHookRender extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.fields = getFormFieldsBlocks();
	}

	render() {
		const { settings, label, onChangeSettingObj } = this.props;

		/* eslint-disable jsx-a11y/no-onchange */
		return <AdvancedModalControl
			value={ settings.webhook_url }
			label={ label( 'webhook_url' ) }
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
		/* eslint-enable jsx-a11y/no-onchange */
	}
}

export default CallWebHookRender;
