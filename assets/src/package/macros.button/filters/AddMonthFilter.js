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
		`Adds the passed number of months via an argument 
		to a macro that returns a date or a timestamp.`,
		'jet-form-builder',
	);
}

AddMonthFilter.prototype = Object.create( BaseFilter.prototype );

export default AddMonthFilter;