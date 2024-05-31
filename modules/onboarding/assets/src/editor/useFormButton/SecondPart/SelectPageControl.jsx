import useSettings from '../hooks/useSettings';
import { ComboboxControl, Flex, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEntityRecords } from '@wordpress/core-data';
import { useState } from '@wordpress/element';
import { styled } from '@linaria/react';

const { Label } = JetFBComponents;

const WrapperComboboxWithButton = styled( Flex )`
    & > div {
        flex: 1;
    }

    .components-base-control__field {
        margin-bottom: inherit;
        padding-bottom: 0;
    }
`;

function SelectPageControl() {
	const [ settings, updateSettings ] = useSettings();
	const [ search, setSearch ]        = useState( '' );

	const pages     = useEntityRecords(
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
		<WrapperComboboxWithButton align="flex-start">
			<ComboboxControl
				options={ pagesList }
				value={ settings.pageId }
				onChange={ pageId => updateSettings( { pageId } ) }
				onFilterValueChange={ setSearch }
				__nextHasNoMarginBottom
			/>
			<Button
				variant="primary"
				onClick={ () => {} }
				isBusy={ false }
				disabled={ false }
			>
				{ __( 'Use the form', 'jet-form-builder-pdf' ) }
			</Button>
		</WrapperComboboxWithButton>
	</>;
}

export default SelectPageControl;