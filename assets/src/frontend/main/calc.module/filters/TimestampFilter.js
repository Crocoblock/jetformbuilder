import Filter from './Filter';
import { getTimestamp } from '../functions';

function TimestampFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'T';
	};
	this.apply   = function ( value ) {
		if ( !value ) {
			return 0;
		}
		const { time } = getTimestamp( value );

		return time;
	};
}

TimestampFilter.prototype = Object.create( Filter.prototype );

export default TimestampFilter;