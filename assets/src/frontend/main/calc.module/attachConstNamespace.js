/* eslint-disable camelcase */
import CurrentDate from './const.namespace/CurrentDate';
import Min_In_Sec from './const.namespace/Min_In_Sec';
import Month_In_Sec from './const.namespace/Month_In_Sec';
import Hour_In_Sec from './const.namespace/Hour_In_Sec';
import Day_In_Sec from './const.namespace/Day_In_Sec';
import Year_In_Sec from './const.namespace/Year_In_Sec';

const { applyFilters: wpApplyFilters } = JetPlugins.hooks;

const getStaticFunctions = () => wpApplyFilters(
	'jet.fb.static.functions',
	[
		CurrentDate,
		Min_In_Sec,
		Month_In_Sec,
		Hour_In_Sec,
		Day_In_Sec,
		Year_In_Sec,
	],
);

/**
 * @type {BaseInternalMacro[]}
 */
let staticFunctions = [];

/**
 * @param  slug
 * @return {boolean|BaseInternalMacro}
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
 * @param  result    {String}
 * @param  fieldName {String}
 * @return {*}
 */
function attachConstNamespace(
	result,
	fieldName,
) {
	if ( !fieldName.includes( 'CT::' ) ) {
		return result;
	}
	fieldName = fieldName.replace( 'CT::', '' );

	const staticFunc = getFunction( fieldName );

	if ( false === staticFunc ) {
		return result;
	}

	return staticFunc.getResult();
}

export default attachConstNamespace;