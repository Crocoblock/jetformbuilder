import { Button } from '@wordpress/components';
import { copySmall } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import {
	usePluginUseSettings,
	BuilderHelpSlotFill,
	Description
} from 'jet-form-builder-use-form';

function BlockBuilder( { name } ) {
	const [ settings, updateSettings ] = usePluginUseSettings();

	const isActive = name === settings.builder;

	return <>
		<Button
			onClick={ () => updateSettings( { builder: name } ) }
			icon={ copySmall }
			variant={ isActive ? 'primary' : 'secondary' }
		>
			{ __(
				'Block for Block Editor',
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

export default BlockBuilder;