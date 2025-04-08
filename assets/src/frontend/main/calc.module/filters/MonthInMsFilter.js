import Filter from './Filter';

function MonthInMsFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'MonthInMs';
	};
	this.apply   = function ( value ) {
		const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;
		return value * ONE_MONTH_MS;
	};
}

MonthInMsFilter.prototype = Object.create( Filter.prototype );

export default MonthInMsFilter;