class Filter {

	constructor() {
		this.props = [];
	}

	/**
	 * @return {string}
	 */
	getSlug() {
		throw new Error( 'getSlug is empty' );
	}

	setProps( props ) {
		this.props.push( ...props );
	}

	applyWithProps( value ) {
		return this.apply( value, ...this.props );
	}

	/**
	 * @param value
	 * @param props
	 * @return {*}
	 */
	apply( value, ...props ) {
		return value;
	}

}

export default Filter;