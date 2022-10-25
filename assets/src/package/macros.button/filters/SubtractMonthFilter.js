import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function SubtractMonthFilter() {
	BaseFilter.call( this );

	this.fullName     = () => 'subMonth';
	this.docArgument  = Number;
	this.isClientSide = true;

	this.help = __(
		`Subtracts the number of months by argument
from a macro that returns a date or timestamp.`,
		'jet-form-builder',
	);
}

SubtractMonthFilter.prototype = Object.create( BaseFilter.prototype );

export default SubtractMonthFilter;