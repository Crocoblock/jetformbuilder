import Filter from './Filter';
import { getTimestamp } from '../functions';

function SubtractYearFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'subDay';
	};

	this.apply = function ( value, years ) {
		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}

		years = years ? +years.trim() : 1;

		return current.setFullYear( current.getFullYear() - years );
	};
}

SubtractYearFilter.prototype = Object.create( Filter.prototype );

export default SubtractYearFilter;