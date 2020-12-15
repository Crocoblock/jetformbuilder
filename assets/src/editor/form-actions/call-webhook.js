import Tools from "../tools";

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

window.jetFormDefaultActions = window.jetFormDefaultActions || {};

window.jetFormDefaultActions[ 'call_webhook' ] = class CallWebHookAction extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.fields = Tools.getFormFieldsBlocks();
		this.data = window.jetFormCallWebHookData;
	}

	render() {

		const settings = this.props.settings;
		const onChange = this.props.onChange;

		const onChangeSetting = ( value, key ) => {
			onChange( {
				...settings,
				[ key ]: value
			} );
		};

		/* eslint-disable jsx-a11y/no-onchange */
		return <TextControl
			key='webhook_url'
			label={ this.data.labels.webhook_url }
			value={ settings.webhook_url }
			onChange={ newVal => {
				onChangeSetting( newVal, 'webhook_url' )
			} }
		/>;
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
