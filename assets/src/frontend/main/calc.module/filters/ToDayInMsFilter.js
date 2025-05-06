import Filter from './Filter';

function ToDayInMsFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toDayInMs';
	};
	this.apply   = function ( value ) {
		const ONE_DAY_MS = 24 * 60 * 60 * 1000;
		return value * ONE_DAY_MS;
	};
}

ToDayInMsFilter.prototype = Object.create( Filter.prototype );

export default ToDayInMsFilter;