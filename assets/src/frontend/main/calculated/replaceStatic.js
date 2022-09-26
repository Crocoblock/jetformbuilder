import CurrentDate from './CurrentDate';
import getFilters from './getFilters';
import applyFilters from './applyFilters';

const { applyFilters: wpApplyFilters } = wp.hooks;

const getStaticFunctions = () => wpApplyFilters(
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
		const current = new staticFunction();

		if ( current.getId() !== slug ) {
			continue;
		}
		return current;
	}

	return false;
}

/**
 * @param formula {String}
 * @param root {Observable}
 * @return {*}
 */
function replaceStatic( formula, root ) {
	const parts = formula.split( /%STATIC::(.*?)%/g );

	return parts.map( current => {
		const [ slug, ...filters ] = current.split( '|' );

		const staticFunc = getFunction( slug );

		if ( false === staticFunc ) {
			return current;
		}

		const filtersList = getFilters( filters );

		return applyFilters( staticFunc.getResult(), filtersList );
	} ).join( '' );
}

export default replaceStatic;