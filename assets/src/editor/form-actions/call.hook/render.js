/**
 * Internal dependencies
 */
const {
	      TextControl,
	      BaseControl,
      } = wp.components;

const { __ } = wp.i18n;

// eslint-disable-next-line max-lines-per-function, complexity
function CallHookRender( { settings, onChangeSettingObj, label } ) {
	/* eslint-disable jsx-a11y/no-onchange */
	return (
		<div key="call_hook">
			<TextControl
				key="hook_name"
				label={ label( 'hook_name' ) }
				value={ settings.hook_name }
				onChange={ newVal => onChangeSettingObj(
					{ hook_name: newVal }
				) }
			/>
			<BaseControl
				key="help_message"
			>
				<div className="jet-call-hook-instruction">
					{ __( 'Called hook names:', 'jet-form-builder' ) }
					<ul>
						<li>
							<code>jet-form-builder/custom-action/{ settings.hook_name }</code> - { __(
							'WP action. Perform a hook without an ability to validate form,',
							'jet-form-builder' ) }
						</li>
						<li>
							<code>jet-form-builder/custom-filter/{ settings.hook_name }</code> - { __(
							'WP filter. Perform a hook with an ability to validate form. Allows to return error message.',
							'jet-form-builder' ) }
						</li>
					</ul>
					{ __( 'Hook arguments:', 'jet-form-builder' ) }
					<ul>
						<li><code>$result</code> - { __(
							'only for WP filter. Hook execution result,',
							'jet-form-builder' ) }</li>
						<li><code>$request</code> - { __(
							'array with submitted form data,',
							'jet-form-builder' ) }</li>
						<li>
							<code>$action_handler</code> - { __(
							'action handler object, allows to manage actions data and to throws error status:',
							'jet-form-builder' ) }
							{/* eslint-disable-next-line react/no-unescaped-entities */}
							<code>throw new Action_Exception( 'failed' )</code>
						</li>
					</ul>
				</div>
			</BaseControl>

		</div>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default CallHookRender;
