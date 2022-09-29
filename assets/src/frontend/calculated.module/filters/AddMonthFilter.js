import Filter from './Filter';

function AddDayFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'addMonth';
	};
	this.apply   = function ( value, months ) {
		months         = months ? +months.trim() : 1;
		const current = new Date( value );

		current.setMonth( current.getMonth() + months );

		return current.getTime();
	};
}

AddDayFilter.prototype = Object.create( Filter.prototype );

export default AddDayFilter;