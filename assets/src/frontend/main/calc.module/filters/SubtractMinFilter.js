import Filter from './Filter';
import { getTimestamp } from '../functions';

function SubtractMinFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'subMin';
	};
	this.apply   = function ( value, minutes ) {
		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}
		minutes = minutes ? +minutes.trim() : 1;

		return current.setMinutes( current.getMinutes() - minutes );
	};
}

SubtractMinFilter.prototype = Object.create( Filter.prototype );

export default SubtractMinFilter;