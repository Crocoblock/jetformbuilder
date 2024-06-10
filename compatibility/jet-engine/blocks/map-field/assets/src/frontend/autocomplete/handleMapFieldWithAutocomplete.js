import SearchInput from './SearchInput';
import SearchAddressBox from './SearchAddressBox';
import DropdownList from './DropdownList';

/**
 * @param input {InputData}
 */
function handleMapFieldWithAutocomplete( input ) {
	if ( 'map' !== input.inputType ||
		!input.nodes?.[ 0 ]?.parentElement?.querySelector?.(
			'.jet-fb-map-field__search',
		)
	) {
		return;
	}

	const search      = input.nodes[ 0 ].parentElement.querySelector(
		'.jet-fb-map-field__search',
	);
	const dropDown    = new DropdownList(
		search.querySelector(
			'.jet-fb-map-field__search-list',
		),
	);
	const searchInput = new SearchInput(
		search.querySelector( '[type="text"]' ),
	);

	const box = new SearchAddressBox( searchInput, dropDown );
	box.setLoaderNode(
		search.querySelector(
			'.jet-fb-map-field__search-loader',
		),
	);
	box.setMapInput( input );

}

export default handleMapFieldWithAutocomplete;