import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function SubtractDayFilter() {
	BaseFilter.call( this );

	this.fullName     = () => 'subDay';
	this.docArgument  = Number;
	this.isClientSide = true;

	this.help = __(
		'Subtracts the number of days by argument from a macro that returns a date or timestamp.',
		'jet-form-builder',
	);
}

SubtractDayFilter.prototype = Object.create( BaseFilter.prototype );

export default SubtractDayFilter;