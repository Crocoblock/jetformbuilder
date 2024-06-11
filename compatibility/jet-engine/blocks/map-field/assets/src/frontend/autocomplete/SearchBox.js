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
		this.getDropDown().hideList();
	} );

	this.getDropDown().focusTopOutside = () => {
		this.getSearchInput().searchNode.focus();
	};

	this.getSearchInput().searchNode.addEventListener( 'keydown', ( event ) => {
		if ( event.key === 'ArrowDown' ) {
			this.dropDown.focusFirstItem();
			event.preventDefault();
		}
	} );

	this.getSearchInput().searchNode.addEventListener( 'focus', ( event ) => {
		this.getDropDown().showList();
	} );

	this.getSearchInput().searchNode.addEventListener( 'blur', ( event ) => {
		if ( event.relatedTarget?.parentElement ===
			this.getDropDown().listNode
		) {
			return;
		}
		this.getDropDown().hideList();
	} );

	this.getDropDown().listNode.addEventListener( 'focusout', ( event ) => {
		if (
			// is it a search field?
			event.relatedTarget === this.getSearchInput().searchNode ||
			// is it one of the elements in the list?
			(
				event.relatedTarget?.parentElement ===
				this.getDropDown().listNode
			)
		) {
			return;
		}
		this.getDropDown().hideList();
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