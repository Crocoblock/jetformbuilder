import { __ } from '@wordpress/i18n';
import { TextControl, Flex } from '@wordpress/components';
import {
	RequiredLabel,
	RowControl,
	RowControlEnd,
	WideLine,
} from 'jet-form-builder-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ValidatorProvider } from 'jet-form-builder-actions';

// eslint-disable-next-line max-lines-per-function
function CallHookRender( {
	settings,
	onChangeSettingObj,
} ) {

	return <Flex direction="column">
		<RowControl>
			{ ( { id } ) => <ValidatorProvider isSupported={ () => true }>
				{ ( { hasError, setShowError } ) => <>
					<RequiredLabel htmlFor={ id }>
						{ __( 'Hook Name', 'jet-form-builder' ) }
					</RequiredLabel>
					<RowControlEnd hasError={ hasError }>
						<TextControl
							id={ id }
							value={ settings.hook_name }
							onChange={ val => onChangeSettingObj( {
								hook_name: val.toLowerCase().
									replace( /[^\w\-]/g, '' ),
							} ) }
							onBlur={ () => setShowError( true ) }
							__next40pxDefaultSize
							__nextHasNoMarginBottom
						/>
					</RowControlEnd>
				</> }
			</ValidatorProvider> }
		</RowControl>
		<WideLine/>
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
					'jet-form-builder' ) }
				</li>
				<li><code>$request</code> - { __(
					'array with submitted form data,', 'jet-form-builder' ) }
				</li>
				<li>
					<code>$action_handler</code> - { __(
					'action handler object, allows to manage actions data and to throws error status:',
					'jet-form-builder' ) }
					<code>throw new Action_Exception( &#39;failed&#39;)</code>
				</li>
			</ul>
		</div>
	</Flex>;
	/* eslint-enable jsx-a11y/no-onchange */
}

export default CallHookRender;
