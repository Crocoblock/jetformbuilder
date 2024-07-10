function Filter() {
	this.props = [];
}

// eslint-disable-next-line jsdoc/require-returns-check
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
 * @param  value
 * @param  props
 * @return {*}
 */
// eslint-disable-next-line no-unused-vars
Filter.prototype.apply = function ( value, ...props ) {
	return value;
};

export default Filter;