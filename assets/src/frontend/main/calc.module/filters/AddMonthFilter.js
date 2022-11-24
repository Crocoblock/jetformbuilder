import Filter from './Filter';
import { getTimestamp } from '../functions';

function AddDayFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'addMonth';
	};
	this.apply   = function ( value, months ) {
		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}
		months = months ? +months.trim() : 1;

		return current.setMonth( current.getMonth() + months );
	};
}

AddDayFilter.prototype = Object.create( Filter.prototype );

export default AddDayFilter;