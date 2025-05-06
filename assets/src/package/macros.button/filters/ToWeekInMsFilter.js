import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function ToWeekInMsFilter() {
	BaseFilter.call( this );

	this.label        = () => __( 'toWeekInMs', 'jet-form-builder' );
	this.fullName     = () => '|toWeekInMs';
	this.isClientSide = true;

	this.help = () => <>
		{ __(
			`Converts a number of weeks into milliseconds.`,
			'jet-form-builder',
		) }
	</>;
}

ToWeekInMsFilter.prototype = Object.create( BaseFilter.prototype );

export default ToWeekInMsFilter;