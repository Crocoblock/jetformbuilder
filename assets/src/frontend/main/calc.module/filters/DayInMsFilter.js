import Filter from './Filter';

function DayInMsFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'DayInMs';
	};
	this.apply   = function ( value ) {
		const ONE_DAY_MS = 24 * 60 * 60 * 1000;
		return value * ONE_DAY_MS;
	};
}

DayInMsFilter.prototype = Object.create( Filter.prototype );

export default DayInMsFilter;