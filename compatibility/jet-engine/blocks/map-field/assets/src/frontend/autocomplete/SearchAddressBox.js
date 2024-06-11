import DropdownList from './DropdownList';
import SearchBox from './SearchBox';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

/**
 * @param searchInput {SearchInput}
 * @param dropDown {DropdownList}
 */
function SearchAddressBox( searchInput, dropDown ) {
	SearchBox.call( this, searchInput, dropDown );
}

SearchAddressBox.prototype = Object.create( SearchBox.prototype );

SearchAddressBox.prototype.initHooks = function () {
	this.getDropDown().selected.watch( () => {
		const selectedNode = this.getDropDown().selected.current;

		if ( selectedNode.dataset.lat && selectedNode.dataset.lng ) {
			this.getMapInput().callable.setMarker( {
				lat: selectedNode.dataset.lat,
				lng: selectedNode.dataset.lng,
			} );
		}
		else {
			this.geocodeSearch();
		}
	} );

	this.getSearchInput().loading.watch( () => {
		console.log( this.getSearchInput().loading.current );
		this.getLoaderNode().classList.toggle(
			'show',
			this.getSearchInput().loading.current,
		);
	} );

	this.getSearchInput().response.watch( () => {
		const { current } = this.getSearchInput().response;

		const items = current.success
		              ? current.response?.data
		              : [ { label: current.response.html } ];

		this.getDropDown().setItems( items );
		this.getDropDown().showList();
	} );

	this.getDropDown().createItem = ( item ) => {
		/**
		 * @type {Element}
		 */
		const element = DropdownList.prototype.createItem.call(
			this.dropDown,
			item,
		);

		element.classList.add( 'jet-fb-map-field__search-item' );

		if ( 'label' in item ) {
			return element;
		}

		element.textContent = item.address;

		if ( item?.lat && item?.lng ) {
			element.dataset.lat = item.lat;
			element.dataset.lng = item.lng;
		}

		return element;
	};

	this.getMapInput().value.watch( () => {
		if ( this.getMapInput().value.current ) {
			return;
		}
		this.getSearchInput().search.current = '';
		this.getDropDown().setItems( [] );
	} );
}

SearchAddressBox.prototype.setLoaderNode = function ( node ) {
	this.loader = node;
};

SearchAddressBox.prototype.getLoaderNode = function () {
	return this.loader;
};

SearchAddressBox.prototype.setMapInput = function ( input ) {
	this.input = input;
};

/**
 * @returns {MapFieldData}
 */
SearchAddressBox.prototype.getMapInput = function () {
	return this.input;
};

SearchAddressBox.prototype.geocodeSearch = function () {
	const path = addQueryArgs(
		JetMapFieldsSettings.apiLocation,
		{
			address: this.getSearchInput().search.current,
		},
	);

	apiFetch( {
		path,
	} ).then( ( response ) => {
		if ( response.success ) {
			this.getMapInput().callable.setMarker( response.data );
		}
		else {
			window.alert( response.html );
		}

	} ).catch( function ( e ) {
		console.error( e );
	} );
};

export default SearchAddressBox;