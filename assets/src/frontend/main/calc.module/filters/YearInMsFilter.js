import Filter from './Filter';
import { getTimestamp } from '../functions';

function YearInMsFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'YearInMs';
	};
	this.apply   = function ( value ) {
		const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
		return value * ONE_YEAR_MS;
	};
}

YearInMsFilter.prototype = Object.create( Filter.prototype );

export default YearInMsFilter;