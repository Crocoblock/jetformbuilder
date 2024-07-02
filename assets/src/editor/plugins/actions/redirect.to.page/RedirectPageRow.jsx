import {
	ControlWithErrorStyle, IconText,
	RequiredLabel,
	RowControlEndStyle,
	RowControl,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { Flex, ComboboxControl } from '@wordpress/components';
import { cx } from '@linaria/core';
import { useDebouncedInput } from '@wordpress/compose';
import { useEntityRecords } from '@wordpress/core-data';
import { useActionValidatorProvider } from 'jet-form-builder-actions';

function RedirectPageRow( { settings, onChangeSettingObj } ) {

	const { hasError } = useActionValidatorProvider( {
		isSupported: error => 'redirect_page' === error?.property,
	} );

	const [ , setSearch, lazySearch ] = useDebouncedInput( '' );

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

	return <RowControl createId={ false }>
		<RequiredLabel>
			{ __( 'Select page', 'jet-form-builder' ) }
		</RequiredLabel>
		<Flex
			className={ cx(
				RowControlEndStyle,
				hasError && ControlWithErrorStyle,
			) }
			direction="column"
		>
			{ hasError && <IconText>
				{ __(
					'Please fill this required field',
					'jet-form-builder',
				) }
			</IconText> }
			<ComboboxControl
				value={ settings.redirect_page }
				options={ pagesList }
				onChange={ redirect_page => onChangeSettingObj(
					{ redirect_page },
				) }
				onFilterValueChange={ setSearch }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</Flex>
	</RowControl>;
}

export default RedirectPageRow;