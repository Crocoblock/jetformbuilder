const {
	getFormFieldsBlocks
} = JetFBActions;

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
		const { settings, label, onChangeSetting } = this.props;

		/* eslint-disable jsx-a11y/no-onchange */
		return <TextControl
			key='webhook_url'
			label={ label( 'webhook_url' ) }
			value={ settings.webhook_url }
			onChange={ newVal => onChangeSetting( newVal, 'webhook_url' ) }
		/>;
		/* eslint-enable jsx-a11y/no-onchange */
	}
}

export default CallWebHookRender;
