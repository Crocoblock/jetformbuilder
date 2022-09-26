const { getFilters } = JetFormBuilderFunctions;

function DynamicMacro() {
	/**
	 * @type {Restriction}
	 */
	this.restriction = null;
	/**
	 * @type {Filter[]}
	 */
	this.filters = null;
}

DynamicMacro.prototype.apply = function () {
	let value = this.value();

	for ( const filter of this.filters ) {
		value = filter.applyWithProps( value );
	}

	return value;
};
/**
 * @param filtersList {string[]}
 */
DynamicMacro.prototype.setFilters = function ( filtersList ) {
	if ( null !== this.filters ) {
		return;
	}
	this.filters = getFilters( filtersList );
};
/**
 * @return {*}
 */
DynamicMacro.prototype.value = function () {
	throw new Error( 'value is empty' );
};
/**
 * @return {string}
 */
DynamicMacro.prototype.getSlug = function () {
	throw new Error( 'getSlug is empty' );
};
/**
 * @param restriction {Restriction}
 * @return {boolean}
 */
DynamicMacro.prototype.isSupported = function ( restriction ) {
	return false;
};
DynamicMacro.prototype.setRestriction = function ( restriction ) {
	this.restriction = restriction;
};

export default DynamicMacro;