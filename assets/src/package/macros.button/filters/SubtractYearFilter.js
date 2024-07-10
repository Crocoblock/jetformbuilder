import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function SubtractYearFilter() {
	BaseFilter.call( this );

	this.fullName     = () => 'subYear';
	this.docArgument  = Number;
	this.isClientSide = true;

	this.help = __(
		`Subtracts the number of years by argument from a macro that returns a date or timestamp.`,
		'jet-form-builder',
	);
}

SubtractYearFilter.prototype = Object.create( BaseFilter.prototype );

export default SubtractYearFilter;