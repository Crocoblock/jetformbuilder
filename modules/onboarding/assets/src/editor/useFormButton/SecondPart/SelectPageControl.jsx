import {
	ComboboxControl,
	Flex,
	FlexBlock,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEntityRecords } from '@wordpress/core-data';
import { useState } from '@wordpress/element';
import UseFormButton from './UseFormButton';

const { Label } = JetFBComponents;

const {
	      usePluginUseSettings,
      } = JetFBHooks;


function SelectPageControl() {
	const [ settings, updateSettings ] = usePluginUseSettings();
	const [ search, setSearch ]        = useState( '' );

	const pages = useEntityRecords(
		'postType',
		'page',
		{
			per_page: 20,
			search,
		},
	);
	const pagesList = pages.records?.map?.( page => (
		{
			value: page.id,
			label: page.title.raw,
		}
	) ) ?? [];

	return <>
		<Label>
			{ __(
				'Select a page',
				'jet-form-builder',
			) }
		</Label>
		<Flex align="flex-start">
			<FlexBlock>
				<ComboboxControl
					options={ pagesList }
					value={ settings.pageId }
					onChange={ pageId => updateSettings( { pageId } ) }
					onFilterValueChange={ setSearch }
					__nextHasNoMarginBottom
				/>
			</FlexBlock>
			<UseFormButton/>
		</Flex>
	</>;
}

export default SelectPageControl;