import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function ToTimeFilter() {
	BaseFilter.call( this );

	this.fullName     = () => 'toTime';
	this.isClientSide = true;

	this.help = () => <>
		{ __(
			'Gets the timestamp from the macro and formats it according to the format of the Time Field.',
			'jet-form-builder',
		) }
		<hr/>
		{ __( 'Example:', 'jet-form-builder' ) + ' ' }
		<code>04:25</code>
	</>;
}

ToTimeFilter.prototype = Object.create( BaseFilter.prototype );

export default ToTimeFilter;