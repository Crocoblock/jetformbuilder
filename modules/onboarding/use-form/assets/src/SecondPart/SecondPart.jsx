import { __ } from '@wordpress/i18n';
import { Button, Flex } from '@wordpress/components';
import { edit, plus } from '@wordpress/icons';
import VideoInstructions from './VideoInstructions';
import SelectPageControl from './SelectPageControl';
import CreatePageControl from './CreatePageControl';
import usePluginUseSettings from '../hooks/usePluginUseSettings';
import SecondaryTitle from '../components/SecondaryTitle';
import Description from '../components/Description';

function SecondPart() {
	const [ settings, updateSettings ] = usePluginUseSettings();

	return <Flex direction="column" gap={ 3 }>
		<SecondaryTitle>
			{ __(
				'2. Where you want to use the form?',
				'jet-form-builder',
			) }
		</SecondaryTitle>
		<Description>
			{ __(
				'Where you want to place the form',
				'jet-form-builder',
			) }
		</Description>
		<Flex direction="column" gap={ 3 }>
			<Flex justify="flex-start" wrap gap={ 3 }>
				<Button
					onClick={ () => updateSettings(
						{ pageType: 'select' } ) }
					icon={ edit }
					variant={ 'select' === settings.pageType
					          ? 'primary'
					          : 'secondary' }
				>
					{ __(
						'Select page to add the form',
						'jet-form-builder',
					) }
				</Button>
				<Description>
					{ __( 'or', 'jet-form-builder' ) }
				</Description>
				<Button
					onClick={ () => updateSettings( { pageType: 'new' } ) }
					icon={ plus }
					variant={ 'new' === settings.pageType
					          ? 'primary'
					          : 'secondary' }
				>
					{ __(
						'Create new page',
						'jet-form-builder',
					) }
				</Button>
			</Flex>
			{ 'select' === settings.pageType && <SelectPageControl/> }
			{ 'new' === settings.pageType && <CreatePageControl/> }
			<VideoInstructions/>
		</Flex>
	</Flex>;
}

export default SecondPart;