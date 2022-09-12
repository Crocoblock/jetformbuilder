function Filter() {
	this.props = [];
}

/**
 * @return {string}
 */
Filter.prototype.getSlug = function () {
	throw new Error( 'getSlug is empty' );
};
Filter.prototype.setProps       = function ( props ) {
	this.props.push( ...props );
};
Filter.prototype.applyWithProps = function ( value ) {
	return this.apply( value, ...this.props );
};
/**
 * @param value
 * @param props
 * @return {*}
 */
Filter.prototype.apply = function ( value, ...props ) {
	return value;
};

export default Filter;