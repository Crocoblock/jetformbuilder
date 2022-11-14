import Filter from './Filter';
import { getTimestamp } from '../functions';

function SubtractHourFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'subHour';
	};
	this.apply   = function ( value, hour ) {
		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}
		hour = hour ? +hour.trim() : 1;

		return current.setHours( current.getHours() - hour );
	};
}

SubtractHourFilter.prototype = Object.create( Filter.prototype );

export default SubtractHourFilter;