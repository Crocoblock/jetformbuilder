import Filter from './Filter';
import { getTimestamp } from '../functions';

function SetMonthFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'setMonth';
	};
	this.apply   = function ( value, month ) {
		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}
		month = month ? +month.trim() : 1;

		return current.setMonth( month );
	};
}

SetMonthFilter.prototype = Object.create( Filter.prototype );

export default SetMonthFilter;