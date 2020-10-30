import Tools from "../tools/tools";
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

window.jetFormDefaultActions['call_webhook'] = class CallWebHookAction extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.fields = Tools.getFormFieldsBlocks();
		this.data 	= window.jetFormCallWebHookData;
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
		return ( <div key="call_webhook">
			<BaseControl
				label={ this.data.labels.webhook_url }
				key="call_webhook_input"
			>
				<div className='input-webhook-url'>
					<TextControl
						key='webhook_url'
						value={ settings.webhook_url }
						onChange={ newVal => {
							onChangeSetting( newVal, 'webhook_url' )
						} }
					/>
				</div>
			</BaseControl>
		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
