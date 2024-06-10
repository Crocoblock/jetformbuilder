import SearchInput from './SearchInput';
import DropdownList from './DropdownList';

/**
 * @param searchInput {SearchInput}
 * @param dropDown {DropdownList}
 */
function SearchBox( searchInput, dropDown ) {
	this.searchInput = searchInput;
	this.dropDown    = dropDown;

	this.getDropDown().selected.signals = [];
	this.getDropDown().selected.watch( () => {
		this.searchInput.searchNode.value = (
			this.getDropDown().selected.current.textContent
		);
		this.dropDown.setItems( [] );
	} );

	this.getDropDown().focusTopOutside = () => {
		this.searchInput.focus();
	};

	this.getSearchInput().searchNode.addEventListener( 'keydown', ( event ) => {
		if ( event.key === 'ArrowDown' ) {
			this.dropDown.focusFirstItem();
			event.preventDefault();
		}
	} );

	this.getSearchInput().search.watch( () => {
		if ( 2 > this.searchInput.search.current?.length ) {
			this.dropDown.setItems( [] );
		}
	} );
}

/**
 * @returns {DropdownList}
 */
SearchBox.prototype.getDropDown = function () {
	return this.dropDown;
};

/**
 * @returns {SearchInput}
 */
SearchBox.prototype.getSearchInput = function () {
	return this.searchInput;
};

export default SearchBox;