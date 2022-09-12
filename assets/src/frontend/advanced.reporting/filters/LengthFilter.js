import Filter from './Filter';

function LengthFilter() {
	Filter.call( this );

	this.getSlug = function () {
		return 'length';
	};
	this.apply   = function ( value ) {
		return value.length;
	};
}

LengthFilter.prototype = Object.create( Filter.prototype );

export default LengthFilter;