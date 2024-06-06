import { __ } from '@wordpress/i18n';
import { TextControl, Flex, FlexBlock } from '@wordpress/components';
import UseFormButton from './UseFormButton';

const { Label } = JetFBComponents;

const {
	      usePluginUseSettings,
      } = JetFBHooks;

function CreatePageControl() {
	const [ settings, updateSettings ] = usePluginUseSettings();

	return <>
		<Label>
			{ __(
				'Page title',
				'jet-form-builder',
			) }
		</Label>
		<Flex align="flex-start">
			<FlexBlock>
				<TextControl
					value={ settings.pageTitle }
					onChange={ pageTitle => updateSettings( { pageTitle } ) }
					__nextHasNoMarginBottom
				/>
			</FlexBlock>
			<UseFormButton
				disabled={ !Boolean( settings?.pageTitle?.length ) }
			/>
		</Flex>
	</>;
}

export default CreatePageControl;