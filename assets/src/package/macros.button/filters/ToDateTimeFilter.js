import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function ToDateTimeFilter() {
	BaseFilter.call( this );

	this.label        = () => __( 'toDateTime', 'jet-form-builder' );
	this.fullName     = () => '|toDateTime';
	this.isClientSide = true;

	this.help = () => <>
		{ __(
			`Gets the timestamp from the macro and formats it according to the format of the Datetime Field.`,
			'jet-form-builder',
		) }
		<hr/>
		{ __( 'Example:', 'jet-form-builder' ) + ' ' }
		<code>2022-02-24T04:25</code>
	</>;
}

ToDateTimeFilter.prototype = Object.create( BaseFilter.prototype );

export default ToDateTimeFilter;