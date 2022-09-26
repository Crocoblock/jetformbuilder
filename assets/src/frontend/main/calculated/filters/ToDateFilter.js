import Filter from './Filter';

function ToDateFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toDate';
	};
	this.apply   = function ( value ) {
		const dateString = new Date( value ).toISOString();
		const [ date ]   = dateString.split( 'T' );

		return date;
	};
}

ToDateFilter.prototype = Object.create( Filter.prototype );

export default ToDateFilter;