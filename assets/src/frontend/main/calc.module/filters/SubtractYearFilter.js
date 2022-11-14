import Filter from './Filter';

function SubtractYearFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'subDay';
	};
	
	this.apply = function ( value, years ) {
		years        = years ? +years.trim() : 1;
		const current = new Date( value );

		return current.setFullYear( current.getFullYear() - years );
	};
}

SubtractYearFilter.prototype = Object.create( Filter.prototype );

export default SubtractYearFilter;