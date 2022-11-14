import Filter from './Filter';

function FallBackFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'ifEmpty';
	};
	this.apply   = function ( value, fallback ) {
		return value ? value : fallback;
	};
}

FallBackFilter.prototype = Object.create( Filter.prototype );

export default FallBackFilter;