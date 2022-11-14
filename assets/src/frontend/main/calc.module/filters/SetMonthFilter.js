import Filter from './Filter';

function SetMonthFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'setMonth';
	};
	this.apply   = function ( value, month ) {
		month          = month ? +month.trim() : 1;
		const current = new Date( value );

		return current.setMonth( month );
	};
}

SetMonthFilter.prototype = Object.create( Filter.prototype );

export default SetMonthFilter;