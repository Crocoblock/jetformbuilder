import Filter from './Filter';

function ToDateTimeFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toDateTime';
	};
	this.apply   = function ( value ) {
		// '2022-09-26T14:52:03.806Z'
		const dateString = new Date( value ).toISOString();

		// '2022-09-26T14:52'
		return dateString.split( '.' )[ 0 ].slice( 0, -3 );
	};
}

ToDateTimeFilter.prototype = Object.create( Filter.prototype );

export default ToDateTimeFilter;