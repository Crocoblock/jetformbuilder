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
Filter.prototype.apply = function ( value, ...props ) { // eslint-disable-line no-unused-vars
	return value;
};

export default Filter;