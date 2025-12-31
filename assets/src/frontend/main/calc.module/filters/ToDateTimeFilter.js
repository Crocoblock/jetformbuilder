import Filter from './Filter';
import { toDateTime } from '../functions';

function ToDateTimeFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toDateTime';
	};
	this.apply   = function ( value, isUTC = false ) {
		// Convert string 'true'/'false' to boolean
		if ( typeof isUTC === 'string' ) {
			// Remove quotes and trim
			const cleaned = isUTC.trim().replace( /^['"]|['"]$/g, '' );
			const lower   = cleaned.toLowerCase();

			isUTC = lower !== 'false';
		} else {
			isUTC = Boolean( isUTC );
		}

		return toDateTime( new Date( value ), isUTC );
	};
}

ToDateTimeFilter.prototype = Object.create( Filter.prototype );

export default ToDateTimeFilter;