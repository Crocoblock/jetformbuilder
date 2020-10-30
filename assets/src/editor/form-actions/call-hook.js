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

window.jetFormDefaultActions['call_hook'] = class CallHookAction extends wp.element.Component {

	constructor( props ) {
		super( props );

		this.fields = Tools.getFormFieldsBlocks();
		this.data 	= window.jetFormCallHookData;
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
		return ( <div key="call_hook">

			<BaseControl
				label={ this.data.labels.hook_name }
				key="call_hook_input"
			>
				<div className='options-page-select'>
					<TextControl
						key='hook_name'
						value={ settings.hook_name }
						onChange={ newVal => {
							onChangeSetting( newVal, 'hook_name' )
						} }
					/>
				</div>


			</BaseControl>

			<BaseControl
				key='help_message'
			>
				<div className='jet-call-hook-instruction'>
					{ __( 'Called hook names:') }
					<ul>
						<li><code>jet-engine-booking/{ settings.hook_name }</code> - { __( 'WP action. Perform a hook without an ability to validate form,', 'jet-engine' ) }</li>
						<li><code>jet-engine-booking/filter/{ settings.hook_name }</code> - { __( 'WP filter. Perform a hook with an ability to validate form. Allows to return error message.', 'jet-engine' ) }</li>
					</ul>
					{ __( 'Hook arguments:') }
					<ul>
						<li><code>$result</code> - { __( 'only for WP filter. Hook execution result,', 'jet-engine' ) }</li>
						<li><code>$data</code> - { __( 'array with submitted form data,', 'jet-engine' ) }</li>
						<li><code>$form</code> - { __( 'current form ID,', 'jet-engine' ) }</li>
						<li><code>$notifications</code> - { __( 'notifications object, allows to returns error status by returning' ) }
							<code>$notifications->set_specific_status( "Status message" )</code>
							{ __( 'method from the hook callback.' ) }
						</li>
					</ul>
				</div>
			</BaseControl>

		</div> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
