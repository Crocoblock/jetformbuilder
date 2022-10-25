import dispatchers from './dispatchers';
import CurrentDateMacro from '../macros/CurrentDateMacro';
import MinInSecMacro from '../macros/MinInSecMacro';
import MonthInSecMacro from '../macros/MonthInSecMacro';
import DayInSecMacro from '../macros/DayInSecMacro';
import YearInSecMacro from '../macros/YearInSecMacro';
import AddDayFilter from '../filters/AddDayFilter';
import AddMonthFilter from '../filters/AddMonthFilter';
import AddYearFilter from '../filters/AddYearFilter';
import FallbackFilter from '../filters/FallbackFilter';
import LengthFilter from '../filters/LengthFilter';
import ToDateFilter from '../filters/ToDateFilter';
import ToDateTimeFilter from '../filters/ToDateTimeFilter';
import ToTimeFilter from '../filters/ToTimeFilter';
import SubtractDayFilter from '../filters/SubtractDayFilter';
import SubtractMonthFilter from '../filters/SubtractMonthFilter';
import SubtractYearFilter from '../filters/SubtractYearFilter';

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
		new FallbackFilter(),
		new LengthFilter(),
		new AddDayFilter(),
		new AddMonthFilter(),
		new AddYearFilter(),
		new SubtractDayFilter(),
		new SubtractMonthFilter(),
		new SubtractYearFilter(),
		new ToDateFilter(),
		new ToDateTimeFilter(),
		new ToTimeFilter(),
	],
};

export default function ( state = DEFAULT_STATE, action ) {
	const callback = dispatchers[ action?.type ];

	if ( callback ) {
		return callback( state, action );
	}

	return state;
}