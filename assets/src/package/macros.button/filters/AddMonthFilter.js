import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function AddMonthFilter() {
	BaseFilter.call( this );

	this.fullName     = () => 'addMonth';
	this.docArgument  = Number;
	this.isClientSide = true;

	this.help = __(
		'Accepts a value from a date field or a timestamp',
		'jet-form-builder',
	);
}

AddMonthFilter.prototype = Object.create( BaseFilter.prototype );

export default AddMonthFilter;