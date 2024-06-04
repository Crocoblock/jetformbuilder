import { __ } from '@wordpress/i18n';
import { Button, Flex } from '@wordpress/components';
import { edit, plus } from '@wordpress/icons';
import VideoInstructions from './VideoInstructions';
import SelectPageControl from './SelectPageControl';
import CreatePageControl from './CreatePageControl';

const {
	      usePluginUseSettings,
      } = JetFBHooks;


function SecondPart() {
	const [ settings, updateSettings ] = usePluginUseSettings();

	return <>
		<h3>
			{ __(
				'2. Where you want to use the form?',
				'jet-form-builder',
			) }
		</h3>
		<p>
			{ __(
				'Where you want to place the form',
				'jet-form-builder',
			) }
		</p>
		<Flex direction="column" gap={ 4 }>
			<Flex justify="flex-start" wrap gap={ 4 }>
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
				<p style={ { margin: 'unset' } }>
					{ __( 'or', 'jet-form-builder' ) }
				</p>
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
	</>;
}

export default SecondPart;