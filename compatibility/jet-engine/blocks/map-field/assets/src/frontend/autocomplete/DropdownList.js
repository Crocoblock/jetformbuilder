const { ReactiveVar } = JetFormBuilderAbstract;

/**
 * @param listNode {Element}
 */
function DropdownList( listNode ) {
	this.listNode = listNode;
	this.selected = new ReactiveVar();
	this.selected.make();

	this.initEventListeners();
}

DropdownList.prototype.createItem = function ( item ) {
	const li       = document.createElement( 'li' );
	li.textContent = item.label;
	li.tabIndex    = 0; // Make the li element focusable
	return li;
};

DropdownList.prototype.setItems = function ( items ) {
	this.listNode.innerHTML = '';

	const liElements = items.map( this.createItem.bind( this ) );

	this.listNode.append( ...liElements );
};

DropdownList.prototype.showList = function () {
	if ( !this.listNode.querySelector( 'li' ) ) {
		return;
	}
	this.listNode.classList.add( 'show' );
};

DropdownList.prototype.hideList = function () {
	this.listNode.classList.remove( 'show' );
};

DropdownList.prototype.onSelect = function () {
	const selectedItems = this.listNode.querySelectorAll( '.selected' );
	selectedItems.forEach( function ( selectedItem ) {
		selectedItem.classList.remove( 'selected' );
	} );

	this.selected.current.classList.add( 'selected' );
};

DropdownList.prototype.initEventListeners = function () {

	this.listNode.addEventListener( 'click', ( event ) => {
		if ( event.target.tagName === 'LI' ) {
			this.selected.current = event.target;
		}
	} );

	this.listNode.addEventListener( 'keydown', ( event ) => {
		const focusedElement = document.activeElement;
		if ( focusedElement.tagName === 'LI' &&
			focusedElement.parentNode === this.listNode
		) {
			switch ( event.key ) {
				case 'ArrowDown':
					this.focusNextItem( focusedElement );
					event.preventDefault();
					break;
				case 'ArrowUp':
					this.focusPreviousItem( focusedElement );
					event.preventDefault();
					break;
				case 'Enter':
					this.selected.current = focusedElement;
					event.preventDefault();
					break;
			}
		}
	} );

	this.selected.watch( this.onSelect.bind( this ) );
};

DropdownList.prototype.focusNextItem = function ( current ) {
	const next = current.nextElementSibling;
	if ( next ) {
		next.focus();
	}
};

DropdownList.prototype.focusPreviousItem = function ( current ) {
	const prev = current.previousElementSibling;
	if ( prev ) {
		prev.focus();
	}
	else {
		this.focusTopOutside();
	}
};
DropdownList.prototype.focusTopOutside   = function () {
};

DropdownList.prototype.focusFirstItem = function () {
	const firstItem = this.listNode.querySelector( 'li' );
	if ( firstItem ) {
		firstItem.focus();
	}
};

export default DropdownList;
