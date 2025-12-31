import { __ } from '@wordpress/i18n';
import { TextControl, Flex, FlexBlock } from '@wordpress/components';
import UseFormButton from './UseFormButton';
import usePluginUseSettings from '../hooks/usePluginUseSettings';
import { Label, StyledTextControl, StyledFlexControl } from 'jet-form-builder-components';

function CreatePageControl() {
	const [ settings, updateSettings ] = usePluginUseSettings();

	return <>
		<Label>
			{ __(
				'Page title',
				'jet-form-builder',
			) }
		</Label>
		<StyledFlexControl align="flex-start">
			<FlexBlock>
				<StyledTextControl
					value={ settings.pageTitle }
					onChange={ pageTitle => updateSettings( { pageTitle } ) }
				/>
			</FlexBlock>
			<UseFormButton
				disabled={ !Boolean( settings?.pageTitle?.length ) }
			/>
		</StyledFlexControl>
	</>;
}

export default CreatePageControl;