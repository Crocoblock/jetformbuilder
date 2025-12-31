/* eslint-disable import/no-extraneous-dependencies */
import {
	RequiredLabel,
	RowControlEnd,
	RowControl,
	StyledComboboxControl
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { useDebouncedInput } from '@wordpress/compose';
import { useEntityRecords } from '@wordpress/core-data';
import { useActionValidatorProvider } from 'jet-form-builder-actions';
import { useSelect } from '@wordpress/data';

// eslint-disable-next-line max-lines-per-function
function RedirectPageRow( { settings, onChangeSettingObj } ) {

	const { hasError } = useActionValidatorProvider( {
		isSupported: error => 'redirect_page' === error?.property,
	} );

	const [ , setSearch, lazySearch ] = useDebouncedInput( '' );

	const selectedPage = useSelect( select => (
		select( 'core' ).getEntityRecord(
			'postType',
			'page',
			settings.redirect_page,
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	), [] );

	const pages     = useEntityRecords(
		'postType',
		'page',
		{
			per_page: 20,
			search: lazySearch,
		},
	);
	const pagesList = pages.records?.filter?.(
		( { id } ) => id !== selectedPage?.id,
	).map?.( page => (
		{
			value: page.id,
			label: page.title.raw,
		}
	) ) ?? [];

	return <RowControl createId={ false }>
		<RequiredLabel>
			{ __( 'Select page', 'jet-form-builder' ) }
		</RequiredLabel>
		<RowControlEnd hasError={ hasError }>
			<StyledComboboxControl
				value={ +settings.redirect_page }
				options={ (
					selectedPage?.id
					? [
							{
								value: selectedPage.id,
								label: selectedPage.title.raw,
							},
							...pagesList,
						]
					: pagesList
				) }
				onChange={ val => onChangeSettingObj(
					{ redirect_page: val },
				) }
				onFilterValueChange={ setSearch }
			/>
		</RowControlEnd>
	</RowControl>;
}

export default RedirectPageRow;