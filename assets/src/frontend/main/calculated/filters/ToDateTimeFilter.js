import Filter from './Filter';
import toDateTime from './toDateTime';

function ToDateTimeFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toDateTime';
	};
	this.apply   = function ( value ) {
		return toDateTime( new Date( value ) );
	};
}

ToDateTimeFilter.prototype = Object.create( Filter.prototype );

export default ToDateTimeFilter;