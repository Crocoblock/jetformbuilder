import { Button } from '@wordpress/components';
import { copySmall } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import {
	BuilderHelpSlotFill,
	usePluginUseSettings,
	Description,
} from 'jet-form-builder-use-form';

function BricksBuilder( { name } ) {
	const [ settings, updateSettings ] = usePluginUseSettings();

	const isActive = name === settings.builder;

	return <>
		<Button
			onClick={ () => updateSettings( { builder: name } ) }
			icon={ copySmall }
			variant={ isActive ? 'primary' : 'secondary' }
		>
			{ __(
				'Bricks Element',
				'jet-form-builder',
			) }
		</Button>
		{ isActive && <BuilderHelpSlotFill.Fill>
			<Description>
				{ __(
					'The form will be automatically added to the end of the selected page',
					'jet-form-builder',
				) }
			</Description>
		</BuilderHelpSlotFill.Fill> }
	</>;
}

export default BricksBuilder;