import Filter from './Filter';
import { getTimestamp } from '../functions';

function SetHourFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'setHour';
	};
	this.apply   = function ( value, hour ) {
		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}
		hour = hour ? +hour.trim() : 1;

		return current.setHours( hour );
	};
}

SetHourFilter.prototype = Object.create( Filter.prototype );

export default SetHourFilter;