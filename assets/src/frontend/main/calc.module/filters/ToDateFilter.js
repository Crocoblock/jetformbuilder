import Filter from './Filter';
import { toDate } from '../functions';

function ToDateFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toDate';
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

		return toDate( new Date( value ), isUTC );
	};
}

ToDateFilter.prototype = Object.create( Filter.prototype );

export default ToDateFilter;