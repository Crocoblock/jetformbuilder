import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function ToMonthInMsFilter() {
	BaseFilter.call( this );

	this.label        = () => __( 'toMonthInMs', 'jet-form-builder' );
	this.fullName     = () => '|toMonthInMs';
	this.isClientSide = true;

	this.help = () => <>
		{ __(
			`Converts a number of months into milliseconds.`,
			'jet-form-builder',
		) }
	</>;
}

ToMonthInMsFilter.prototype = Object.create( BaseFilter.prototype );

export default ToMonthInMsFilter;