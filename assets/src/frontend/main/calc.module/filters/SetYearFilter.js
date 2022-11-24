import Filter from './Filter';
import { getTimestamp } from '../functions';

function SetYearFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'setYear';
	};

	this.apply = function ( value, year ) {
		year = year ? +year.trim() : false;

		if ( !year ) {
			return value;
		}

		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}

		return current.setFullYear( year );
	};
}

SetYearFilter.prototype = Object.create( Filter.prototype );

export default SetYearFilter;