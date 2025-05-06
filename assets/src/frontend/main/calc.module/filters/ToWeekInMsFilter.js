import Filter from './Filter';

function ToWeekInMsFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toWeekInMs';
	};
	this.apply   = function ( value ) {
		const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
		return value * ONE_WEEK_MS;
	};
}

ToWeekInMsFilter.prototype = Object.create( Filter.prototype );

export default ToWeekInMsFilter;