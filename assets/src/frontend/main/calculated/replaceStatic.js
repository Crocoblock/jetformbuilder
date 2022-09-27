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
 * @param current {String}
 * @param name {String}
 * @param filters {Filter[]}
 * @param root {Observable}
 * @return {*}
 */
function replaceStatic(
	current,
	name,
	filters,
	root,
) {
	if ( !name.includes( 'STATIC::' ) ) {
		return current;
	}
	name = name.replace( 'STATIC::', '' );

	const staticFunc = getFunction( name );

	if ( false === staticFunc ) {
		return current;
	}

	return applyFilters( staticFunc.getResult(), filters );
}

export default replaceStatic;