import { __ } from '@wordpress/i18n';
import { TextControl, Flex, FlexBlock } from '@wordpress/components';
import UseFormButton from './UseFormButton';
import usePluginUseSettings from '../hooks/usePluginUseSettings';
import { Label } from 'jet-form-builder-components';

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
					__next40pxDefaultSize
				/>
			</FlexBlock>
			<UseFormButton
				disabled={ !Boolean( settings?.pageTitle?.length ) }
			/>
		</Flex>
	</>;
}

export default CreatePageControl;