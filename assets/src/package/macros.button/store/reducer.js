import dispatchers from './dispatchers';
import CurrentDateMacro from '../macros/CurrentDateMacro';
import MinInSecMacro from '../macros/MinInSecMacro';
import MonthInSecMacro from '../macros/MonthInSecMacro';
import DayInSecMacro from '../macros/DayInSecMacro';
import YearInSecMacro from '../macros/YearInSecMacro';
import AddDayFilter from '../filters/AddDayFilter';
import AddMonthFilter from '../filters/AddMonthFilter';

/**
 *
 * @type {{
 * macros: BaseMacro[],
 * filters: BaseFilter[]
 * }}
 */
const DEFAULT_STATE = {
	macros: [
		new CurrentDateMacro(),
		new MinInSecMacro(),
		new DayInSecMacro(),
		new MonthInSecMacro(),
		new YearInSecMacro(),
	],
	filters: [
		new AddDayFilter(),
		new AddMonthFilter(),
	],
};

export default function ( state = DEFAULT_STATE, action ) {
	const callback = dispatchers[ action?.type ];

	if ( callback ) {
		return callback( state, action );
	}

	return state;
}