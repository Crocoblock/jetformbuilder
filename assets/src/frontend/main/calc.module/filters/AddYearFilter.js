import Filter from './Filter';

function AddYearFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'addYear';
	};
	this.apply   = function ( value, years ) {
		years         = years ? +years.trim() : 1;
		const current = new Date( value );

		return current.setFullYear( current.getFullYear() + years );
	};
}

AddYearFilter.prototype = Object.create( Filter.prototype );

export default AddYearFilter;