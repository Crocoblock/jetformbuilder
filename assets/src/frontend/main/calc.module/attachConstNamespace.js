import CurrentDate from './const.namespace/CurrentDate';
import MinInSec from './const.namespace/MinInSec';
import MonthInSec from './const.namespace/MonthInSec';
import HourInSec from './const.namespace/HourInSec';
import DayInSec from './const.namespace/DayInSec';
import YearInSec from './const.namespace/YearInSec';

const { applyFilters: wpApplyFilters } = JetPlugins.hooks;

const getStaticFunctions = () => wpApplyFilters(
	'jet.fb.static.functions',
	[
		CurrentDate,
		MinInSec,
		MonthInSec,
		HourInSec,
		DayInSec,
		YearInSec,
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