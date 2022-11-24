import Filter from './Filter';
import { getTimestamp } from '../functions';

function SetDayFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'setDay';
	};
	this.apply   = function ( value, day ) {
		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}
		day = day ? +day.trim() : 1;

		return current.setDate( day );
	};
}

SetDayFilter.prototype = Object.create( Filter.prototype );

export default SetDayFilter;