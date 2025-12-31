import Filter from './Filter';
import { toTime } from '../functions';

function ToTimeFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toTime';
	};
	this.apply   = function ( value, isUTC = true ) {
		// Convert string 'true'/'false' to boolean
		if ( typeof isUTC === 'string' ) {
			// Remove quotes and trim
			const cleaned = isUTC.trim().replace( /^['"]|['"]$/g, '' );
			const lower   = cleaned.toLowerCase();

			isUTC = lower !== 'false';
		} else {
			isUTC = Boolean( isUTC );
		}

		return toTime( new Date( value ), isUTC );
	};
}

ToTimeFilter.prototype = Object.create( Filter.prototype );

export default ToTimeFilter;