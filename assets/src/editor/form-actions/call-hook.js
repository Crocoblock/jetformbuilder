
const { Tools, addAction } = JFBFunctions;

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

addAction( 'call_hook', function CallHookAction( { settings, onChange, source, label, help } ) {

	const onChangeSetting = ( value, key ) => {
		onChange( {
			...settings,
			[ key ]: value
		} );
	};

	/* eslint-disable jsx-a11y/no-onchange */
	return ( <div key="call_hook">
		<TextControl
			key='hook_name'
			label={ label( 'hook_name' ) }
			value={ settings.hook_name }
			onChange={ newVal => {
				onChangeSetting( newVal, 'hook_name' )
			} }
		/>
		<BaseControl
			key='help_message'
		>
			<div className='jet-call-hook-instruction'>
				{ __( 'Called hook names:' ) }
				<ul>
					<li>
						<code>jet-form-builder/custom-action/{ settings.hook_name }</code> - { __( 'WP action. Perform a hook without an ability to validate form,' ) }
					</li>
					<li>
						<code>jet-form-builder/custom-filter/{ settings.hook_name }</code> - { __( 'WP filter. Perform a hook with an ability to validate form. Allows to return error message.' ) }
					</li>
				</ul>
				{ __( 'Hook arguments:' ) }
				<ul>
					<li><code>$result</code> - { __( 'only for WP filter. Hook execution result,' ) }</li>
					<li><code>$request</code> - { __( 'array with submitted form data,' ) }</li>
					<li>
						<code>$action_handler</code> - { __( 'action handler object, allows to manage actions data and to throws error status:' ) }
						<code>throw new Action_Exception( 'failed' )</code>
					</li>
				</ul>
			</div>
		</BaseControl>

	</div> );
	/* eslint-enable jsx-a11y/no-onchange */
} );
