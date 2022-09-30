import CalculatedFormula from './CalculatedFormula';
import BaseInternalMacro from './const.namespace/BaseInternalMacro';
import getFilters from './getFilters';
import applyFilters from './applyFilters';
import { toDate, toDateTime, toTime, getTimestamp } from './functions';
import Constants from './constants';

window.JetFormBuilderAbstract = {
	...(
		window.JetFormBuilderAbstract ?? {}
	),
	CalculatedFormula,
	BaseInternalMacro,
};

window.JetFormBuilderFunctions = {
	...(
		window.JetFormBuilderFunctions ?? {}
	),
	getFilters,
	applyFilters,
	toDate,
	toDateTime,
	toTime,
	getTimestamp,
};

window.JetFormBuilderConst = {
	...(
		window.JetFormBuilderConst ?? {}
	),
	...Constants,
};