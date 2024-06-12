import { Button } from '@wordpress/components';
import { copySmall } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import {
	usePluginUseSettings,
	BuilderHelpSlotFill,
} from 'jet-form-builder-use-form';

function ElementorBuilder( { name } ) {
	const [ settings, updateSettings ] = usePluginUseSettings();

	const isActive = name === settings.builder;

	return <>
		<Button
			onClick={ () => updateSettings( { builder: name } ) }
			icon={ copySmall }
			variant={ isActive ? 'primary' : 'secondary' }
		>
			{ __(
				'Elementor Widget',
				'jet-form-builder',
			) }
		</Button>
		{ isActive && <BuilderHelpSlotFill.Fill>
			<p>
				{ __(
					'The form will be automatically added to the end of the selected page',
					'jet-form-builder',
				) }
			</p>
		</BuilderHelpSlotFill.Fill> }
	</>;
}

export default ElementorBuilder;