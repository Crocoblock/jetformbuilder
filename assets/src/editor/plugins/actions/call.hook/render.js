import { __ } from '@wordpress/i18n';
import { TextControl, BaseControl, Flex } from '@wordpress/components';
import {
	RequiredLabel,
	RowControl,
	RowControlEndStyle,
	IconText,
	ControlWithErrorStyle,
} from 'jet-form-builder-components';
import { cx } from '@linaria/core';

const { ValidatorProvider } = JetFBComponents;

function CallHookRender( {
	settings,
	onChangeSettingObj,
} ) {

	return <>
		<RowControl>
			{ ( { id } ) => <ValidatorProvider isSupported={ () => true }>
				{ ( { hasError, setShowError } ) => <>
					<RequiredLabel htmlFor={ id }>
						{ __( 'Hook Name', 'jet-form-builder' ) }
					</RequiredLabel>
					<Flex
						className={ cx(
							RowControlEndStyle,
							hasError && ControlWithErrorStyle,
						) }
						direction="column"
					>
						{ hasError && <IconText>
							{ __(
								'Please fill this required field',
								'jet-form-builder',
							) }
						</IconText> }
						<TextControl
							id={ id }
							value={ settings.hook_name }
							onChange={ val => onChangeSettingObj( {
								hook_name: val.toLowerCase().
									replace( /[^\w\-]/g, '' ),
							} ) }
							onBlur={ () => setShowError( true ) }
						/>
					</Flex>
				</> }
			</ValidatorProvider> }
		</RowControl>
		<BaseControl
			key="help_message"
		>
			<div className="jet-call-hook-instruction">
				{ __( 'Called hook names:' ) }
				<ul>
					<li>
						<code>jet-form-builder/custom-action/{ settings.hook_name }</code> - { __(
						'WP action. Perform a hook without an ability to validate form,' ) }
					</li>
					<li>
						<code>jet-form-builder/custom-filter/{ settings.hook_name }</code> - { __(
						'WP filter. Perform a hook with an ability to validate form. Allows to return error message.' ) }
					</li>
				</ul>
				{ __( 'Hook arguments:' ) }
				<ul>
					<li><code>$result</code> - { __(
						'only for WP filter. Hook execution result,' ) }
					</li>
					<li><code>$request</code> - { __(
						'array with submitted form data,' ) }</li>
					<li>
						<code>$action_handler</code> - { __(
						'action handler object, allows to manage actions data and to throws error status:' ) }
						<code>throw new Action_Exception( 'failed' )</code>
					</li>
				</ul>
			</div>
		</BaseControl>
	</>;
	/* eslint-enable jsx-a11y/no-onchange */
}

export default CallHookRender;
