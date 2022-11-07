import Filter from './Filter';
import { getTimestamp } from '../functions';

function AddHourFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'addHour';
	};
	this.apply   = function ( value, hours ) {
		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}

		hours = hours ? +(
			hours.trim()
		) : 1;

		return current.setHours( current.getHours() + hours );
	};
}

AddHourFilter.prototype = Object.create( Filter.prototype );

export default AddHourFilter;