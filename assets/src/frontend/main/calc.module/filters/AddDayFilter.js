import Filter from './Filter';

function AddDayFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'addDay';
	};
	this.apply   = function ( value, days ) {
		days          = days ? +(days.trim()) : 1;
		const current = new Date( value );

		return current.setDate( current.getDate() + days );
	};
}

AddDayFilter.prototype = Object.create( Filter.prototype );

export default AddDayFilter;