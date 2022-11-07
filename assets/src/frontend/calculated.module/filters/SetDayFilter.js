import Filter from './Filter';

function SetDayFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'setDay';
	};
	this.apply   = function ( value, day ) {
		day          = day ? +day.trim() : 1;
		const current = new Date( value );

		return current.setDate( day );
	};
}

SetDayFilter.prototype = Object.create( Filter.prototype );

export default SetDayFilter;