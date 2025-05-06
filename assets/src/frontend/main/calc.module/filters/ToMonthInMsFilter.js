import Filter from './Filter';

function ToMonthInMsFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toMonthInMs';
	};
	this.apply   = function ( value ) {
		const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;
		return value * ONE_MONTH_MS;
	};
}

ToMonthInMsFilter.prototype = Object.create( Filter.prototype );

export default ToMonthInMsFilter;