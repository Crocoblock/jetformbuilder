import Filter from './Filter';
import { getTimestamp } from '../functions';

function AddMinFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'addMin';
	};
	this.apply   = function ( value, minutes ) {
		const { time } = getTimestamp( value );
		const current  = new Date( time );

		if ( Number.isNaN( current.getTime() ) ) {
			return 0;
		}

		minutes = minutes ? +(
			minutes.trim()
		) : 1;

		return current.setMinutes( current.getMinutes() + minutes );
	};
}

AddMinFilter.prototype = Object.create( Filter.prototype );

export default AddMinFilter;