import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function ToMinuteInMsFilter() {
	BaseFilter.call( this );

	this.label        = () => __( 'toMinuteInMs', 'jet-form-builder' );
	this.fullName     = () => '|toMinuteInMs';
	this.isClientSide = true;

	this.help = () => <>
		{ __(
			`Converts a number of minutes into milliseconds.`,
			'jet-form-builder',
		) }
	</>;
}

ToMinuteInMsFilter.prototype = Object.create( BaseFilter.prototype );

export default ToMinuteInMsFilter;