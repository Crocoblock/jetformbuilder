import Filter from './Filter';

function SubtractMonthFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'subMonth';
	};

	this.apply = function ( value, months ) {
		months        = months ? +months.trim() : 1;
		const current = new Date( value );

		return current.setMonth( current.getMonth() - months );
	};
}

SubtractMonthFilter.prototype = Object.create( Filter.prototype );

export default SubtractMonthFilter;