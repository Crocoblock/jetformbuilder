import Filter from './Filter';

function ToTimeFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toTime';
	};
	this.apply   = function ( value ) {
		const dateString = new Date( value ).toISOString();

		const [ time = '00:00' ] = dateString.match( /\d{2}:\d{2}/ ) ?? [];

		return time;
	};
}

ToTimeFilter.prototype = Object.create( Filter.prototype );

export default ToTimeFilter;