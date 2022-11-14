import Filter from './Filter';
import { getTimestamp } from '../functions';

function SetMinFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'setMin';
	};
	this.apply   = function ( value, min ) {
		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}
		min = min ? +min.trim() : 1;

		return current.setMinutes( min );
	};
}

SetMinFilter.prototype = Object.create( Filter.prototype );

export default SetMinFilter;