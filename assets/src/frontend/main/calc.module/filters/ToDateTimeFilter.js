import Filter from './Filter';
import { toDateTime } from '../functions';

function ToDateTimeFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toDateTime';
	};
	this.apply   = function ( value ) {
		if ( typeof value !== 'number' ) {
			value = parseInt( value );
		}

		return toDateTime( new Date( value ) );
	};
}

ToDateTimeFilter.prototype = Object.create( Filter.prototype );

export default ToDateTimeFilter;