import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function ToYearInMsFilter() {
	BaseFilter.call( this );

	this.label        = () => __( 'toYearInMs', 'jet-form-builder' );
	this.fullName     = () => '|toYearInMs';
	this.isClientSide = true;

	this.help = () => <>
		{ __(
			`Converts a number of years into milliseconds.`,
			'jet-form-builder',
		) }
	</>;
}

ToYearInMsFilter.prototype = Object.create( BaseFilter.prototype );

export default ToYearInMsFilter;