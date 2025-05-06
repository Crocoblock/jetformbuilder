import Filter from './Filter';

function ToMinuteInMsFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toMinuteInMs';
	};
	this.apply   = function ( value ) {
		const ONE_MINUTE_MS = 60 * 1000;
		return value * ONE_MINUTE_MS;
	};
}

ToMinuteInMsFilter.prototype = Object.create( Filter.prototype );

export default ToMinuteInMsFilter;