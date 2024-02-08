import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function AddYearFilter() {
	BaseFilter.call( this );

	this.fullName     = () => 'addYear';
	this.docArgument  = Number;
	this.isClientSide = true;

	this.help = __(
		'Adds the passed number of years through an argument to a macro that returns a date or a timestamp.',
		'jet-form-builder',
	);
}

AddYearFilter.prototype = Object.create( BaseFilter.prototype );

export default AddYearFilter;