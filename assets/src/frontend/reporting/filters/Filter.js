class Filter {

	/**
	 * @return {string}
	 */
	getSlug() {
		throw new Error( 'getSlug is empty' );
	}

	/**
	 * @param value
	 * @return {*}
	 */
	apply( value ) {
		return value;
	}

}

export default Filter;