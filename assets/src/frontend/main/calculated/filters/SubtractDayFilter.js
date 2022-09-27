import Filter from './Filter';

function SubtractDayFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'subDay';
	};
	this.apply   = function ( value, days ) {
		days          = days ? +days.trim() : 1;
		const current = new Date( value );

		current.setDate( current.getDate() + days );

		return current.getTime();
	};
}

SubtractDayFilter.prototype = Object.create( Filter.prototype );

export default SubtractDayFilter;