import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function AddDayFilter() {
	BaseFilter.call( this );

	this.fullName     = () => 'addDay';
	this.docArgument  = Number;
	this.isClientSide = true;

	this.help = __(
		`Adds the passed number of days via an argument to a macro that returns a date or a timestamp.`,
		'jet-form-builder',
	);
}

AddDayFilter.prototype = Object.create( BaseFilter.prototype );

export default AddDayFilter;