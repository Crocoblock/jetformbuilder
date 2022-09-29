import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function LengthFilter() {
	BaseFilter.call( this );

	this.fullName     = () => 'length';
	this.isClientSide = true;

	this.help = __(
		`Returns the length of a string or array`,
		'jet-form-builder',
	);
}

LengthFilter.prototype = Object.create( BaseFilter.prototype );

export default LengthFilter;