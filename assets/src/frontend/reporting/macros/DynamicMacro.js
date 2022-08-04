import { getFilters } from '../filters/functions';

class DynamicMacro {

	constructor() {
		/**
		 * @type {Restriction}
		 */
		this.restriction = null;

		/**
		 * @type {Filter[]}
		 */
		this.filters = null;
	}

	apply() {
		let value = this.value();

		for ( const filter of this.filters ) {
			value = filter.applyWithProps( value );
		}

		return value;
	}

	/**
	 * @param filtersList {string[]}
	 */
	setFilters( filtersList ) {
		if ( null !== this.filters ) {
			return;
		}
		this.filters = getFilters( filtersList );
	}

	/**
	 * @return {*}
	 */
	value() {
		throw new Error( 'value is empty' );
	}

	/**
	 * @return {string}
	 */
	getSlug() {
		throw new Error( 'getSlug is empty' );
	}

	/**
	 * @param restriction {Restriction}
	 * @return {boolean}
	 */
	isSupported( restriction ) {
		return false;
	}

	setRestriction( restriction ) {
		this.restriction = restriction;
	}

}

export default DynamicMacro;