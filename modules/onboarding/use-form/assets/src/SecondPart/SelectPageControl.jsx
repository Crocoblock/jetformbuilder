import {
	ComboboxControl,
	Flex,
	FlexBlock,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEntityRecords } from '@wordpress/core-data';
import UseFormButton from './UseFormButton';
import { useDebouncedInput } from '@wordpress/compose';
import usePluginUseSettings from '../hooks/usePluginUseSettings';
import { Label } from 'jet-form-builder-components';

function SelectPageControl() {
	const [ settings, updateSettings ] = usePluginUseSettings();

	const [ search, setSearch, lazySearch ] = useDebouncedInput( '' );

	const pages     = useEntityRecords(
		'postType',
		'page',
		{
			per_page: 20,
			search: lazySearch,
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
			<UseFormButton disabled={
				!Boolean( search.length ) &&
				!settings.pageId
			}/>
		</Flex>
	</>;
}

export default SelectPageControl;