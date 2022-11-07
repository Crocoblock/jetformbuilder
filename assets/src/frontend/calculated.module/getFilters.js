import LengthFilter from './filters/LengthFilter';
import FallBackFilter from './filters/FallBackFilter';
import ToDateFilter from './filters/ToDateFilter';
import ToTimeFilter from './filters/ToTimeFilter';
import ToDateTimeFilter from './filters/ToDateTimeFilter';
import AddYearFilter from './filters/AddYearFilter';
import AddMonthFilter from './filters/AddMonthFilter';
import AddDayFilter from './filters/AddDayFilter';
import AddHourFilter from './filters/AddHourFilter';
import AddMinFilter from './filters/AddMinFilter';
import TimestampFilter from './filters/TimestampFilter';
import SetHourFilter from './filters/SetHourFilter';
import SetMinFilter from './filters/SetMinFilter';
import SetDayFilter from './filters/SetDayFilter';
import SetYearFilter from './filters/SetYearFilter';
import SetMonthFilter from './filters/SetMonthFilter';
import SubtractHourFilter from './filters/SubtractHourFilter';
import SubtractDayFilter from './filters/SubtractDayFilter';
import SubtractMinFilter from './filters/SubtractMinFilter';
import SubtractMonthFilter from './filters/SubtractMonthFilter';
import SubtractYearFilter from './filters/SubtractYearFilter';

const { applyFilters } = wp.hooks;

/**
 * @type {array<Filter>}
 */
let filters = [];

const getFilterItems = () => applyFilters(
	'jet.fb.restrictions.filters',
	[
		SetYearFilter,
		SetMonthFilter,
		SetDayFilter,
		SetHourFilter,
		SetMinFilter,
		SubtractYearFilter,
		SubtractMonthFilter,
		SubtractDayFilter,
		SubtractHourFilter,
		SubtractMinFilter,
		AddYearFilter,
		AddMonthFilter,
		AddDayFilter,
		AddHourFilter,
		AddMinFilter,
		LengthFilter,
		FallBackFilter,
		ToDateFilter,
		ToTimeFilter,
		ToDateTimeFilter,
		TimestampFilter,
	],
);
let response         = [];

function pushFilter( name, props = '' ) {
	if ( !filters.length ) {
		filters = getFilterItems().map( current => new current() );
	}

	const filter = filters.find(
		current => name === current.getSlug(),
	);

	if ( !filter ) {
		return;
	}
	props = props.split( ',' ).map(
		item => item.trim(),
	);

	filter.setProps( props );
	response.push( filter );
}

function getFilters( filtersList ) {
	if ( null === filtersList || !filtersList?.length ) {
		return null;
	}

	for ( let filterName of filtersList ) {
		const matches = filterName.match( /^(\w+)\(([^()]+)\)/ );

		if ( null === matches ) {
			pushFilter( filterName );

			continue;
		}

		pushFilter( matches[ 1 ], matches[ 2 ] );
	}

	const tempResponse = [ ...response ];
	response           = [];

	return tempResponse;
}

export default getFilters;