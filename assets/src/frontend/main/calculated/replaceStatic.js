import CurrentDate from './CurrentDate';

const { applyFilters } = wp.hooks;

const getStaticFunctions = () => applyFilters(
	'jet.fb.static.functions',
	[
		CurrentDate,
	],
);

/**
 * @type {BaseStaticMacro[]}
 */
let staticFunctions = [];

/**
 * @param slug
 * @return {boolean|BaseStaticMacro}
 */
function getFunction( slug ) {
	if ( !staticFunctions.length ) {
		staticFunctions = getStaticFunctions();
	}

	for ( const staticFunction of staticFunctions ) {
		if ( staticFunction.getId() !== slug ) {
			continue;
		}
		return staticFunction;
	}

	return false;
}

/**
 * @param formula {String}
 * @param root {Observable}
 * @return {*}
 */
function replaceStatic( formula, root ) {
	const parts = formula.split( /%STATIC::(.+)%/g );

	const prepared = parts.map( current => {
		const slugWithFilters = current.split( '|' );

		const staticFunc = getFunction( slugWithFilters[ 0 ] );

		if ( false === staticFunc ) {
			return current;
		}

		return () => staticFunc.getResult();
	} ).join( '' );
}

export default replaceStatic;