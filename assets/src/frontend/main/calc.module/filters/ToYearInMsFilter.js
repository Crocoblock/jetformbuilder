import Filter from './Filter';

function ToYearInMsFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toYearInMs';
	};
	this.apply   = function ( value ) {
		const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
		return value * ONE_YEAR_MS;
	};
}

ToYearInMsFilter.prototype = Object.create( Filter.prototype );

export default ToYearInMsFilter;