import Filter from './Filter';
import { toDate } from '../functions';

function ToDateFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'toDate';
	};
	this.apply   = function ( value ) {
		return toDate( new Date( value ) );
	};
}

ToDateFilter.prototype = Object.create( Filter.prototype );

export default ToDateFilter;