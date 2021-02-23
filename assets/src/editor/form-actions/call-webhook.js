import Tools from "../helpers/tools";
import { addAction } from "../helpers/action-helper";
import { getFormFieldsBlocks } from "../helpers/blocks-helper";

/**
 * Internal dependencies
 */
const {
	TextControl,
	ToggleControl,
	SelectControl,
	BaseControl
} = wp.components;

const { __ } = wp.i18n;

const {
	useState
} = wp.element;

addAction( 'call_webhook', class CallWebHookAction extends wp.element.Component {

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
} );
