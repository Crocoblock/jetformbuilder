import Filter from './Filter';
import { toTime } from '../functions';

function ToTimeFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toTime';
	};
	this.apply   = function ( value ) {
		return toTime( new Date( value ) );
	};
}

ToTimeFilter.prototype = Object.create( Filter.prototype );

export default ToTimeFilter;