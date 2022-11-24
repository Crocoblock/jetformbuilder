import Filter from './Filter';
import { getTimestamp } from '../functions';

function AddDayFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'addDay';
	};
	this.apply   = function ( value, days ) {
		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}
		days = days ? +(
			days.trim()
		) : 1;

		return current.setDate( current.getDate() + days );
	};
}

AddDayFilter.prototype = Object.create( Filter.prototype );

export default AddDayFilter;