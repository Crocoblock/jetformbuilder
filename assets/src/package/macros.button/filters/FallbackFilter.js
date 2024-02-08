import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function FallbackFilter() {
	BaseFilter.call( this );

	this.fullName     = () => 'ifEmpty';
	this.docArgument  = 'any';
	this.isClientSide = true;

	this.help = __(
		'If the macro returns an empty value, then the filter returns the value passed in the argument',
		'jet-form-builder',
	);
}

FallbackFilter.prototype = Object.create( BaseFilter.prototype );

export default FallbackFilter;