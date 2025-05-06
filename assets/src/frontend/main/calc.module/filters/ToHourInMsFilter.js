import Filter from './Filter';

function ToHourInMsFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toHourInMs';
	};
	this.apply   = function ( value ) {
		const ONE_HOUR_MS = 60 * 60 * 1000;
		return value * ONE_HOUR_MS;
	};
}

ToHourInMsFilter.prototype = Object.create( Filter.prototype );

export default ToHourInMsFilter;