import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function ToHourInMsFilter() {
	BaseFilter.call( this );

	this.label        = () => __( 'toHourInMs', 'jet-form-builder' );
	this.fullName     = () => '|toHourInMs';
	this.isClientSide = true;

	this.help = () => <>
		{ __(
			`Converts a number of hours into milliseconds.`,
			'jet-form-builder',
		) }
	</>;
}

ToHourInMsFilter.prototype = Object.create( BaseFilter.prototype );

export default ToHourInMsFilter;