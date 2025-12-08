import Filter from './Filter';
import { isEmpty } from '../../functions';

function FallBackFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'ifEmpty';
	};
	this.apply   = function ( value, fallback ) {
		return ( isEmpty(value) || Number.isNaN(value) ) ? fallback : value;
	};
}

FallBackFilter.prototype = Object.create( Filter.prototype );

export default FallBackFilter;