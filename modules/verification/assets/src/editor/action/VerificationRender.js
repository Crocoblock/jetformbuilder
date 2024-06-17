import VerificationActionHelp from './VerificationActionHelp';
import VerificationUserRender from './VerificationUserRender';
import {
	TextControl,
	BaseControl,
	Button,
	Flex,
	SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

const {
	      BaseHelp,
	      ActionModalHeaderSlotFill,
	      ActionModalBackButton,
      } = JetFBComponents;

/**
 * @param onChangeSettingObj
 * @param settings
 * @returns {JSX.Element}
 */
function VerificationRender( { onChangeSettingObj, settings } ) {
	const [ showHelp, setShowHelp ] = useState( false );

	return <>
		<ActionModalHeaderSlotFill.Fill>
			<Button
				variant="tertiary"
				isPressed={ showHelp }
				icon={ <svg xmlns="http://www.w3.org/2000/svg"
				            viewBox="0 0 24 24" width="24" height="24"
				            aria-hidden="true" focusable="false">
					<path
						d="M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"/>
				</svg> }
				onClick={ () => setShowHelp( prev => !prev ) }
			/>
		</ActionModalHeaderSlotFill.Fill>
		{ showHelp && <VerificationActionHelp/> }
		<SelectControl
			label={ __( 'Who can verify the submission', 'jet-form-builder' ) }
			value={ settings.who_can ?? '' }
			labelPosition="side"
			options={ [
				{
					value: '',
					label: __( 'User & Administrator', 'jet-form-builder' ),
				},
				{
					value: 'admin',
					label: __( 'Administrator', 'jet-form-builder' ),
				},
			] }
			onChange={ who_can => onChangeSettingObj( { who_can } ) }
		/>
		<BaseControl
			label={ __( 'Link Lifespan', 'jet-form-builder' ) }
			className="jet-fb label-reset-margin"
		>
			<div style={ { flex: 3 } }>
				<TextControl
					value={ settings.lifespan ?? 4 }
					onChange={ lifespan => onChangeSettingObj( { lifespan } ) }
				/>
				<BaseHelp style={ { marginTop: '-4px' } }>
					{ __(
						`Indicates for how many hours a verification link 
will be active. If you leave this field empty or enter "0", it means 
verification can be completed at any given time.`,
						'jet-form-builder',
					) }
				</BaseHelp>
			</div>
		</BaseControl>
		<VerificationUserRender
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
	</>;
}

export default VerificationRender;