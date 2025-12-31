import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function ToDateTimeFilter() {
	BaseFilter.call( this );

	this.label        = () => __( 'toDateTime', 'jet-form-builder' );
	this.fullName     = () => '|toDateTime';
	this.docArgument  = Boolean;
	this.isClientSide = true;

	this.help = () => <>
		{ __(
			`Formats the timestamp according to the Datetime Field format.`,
			'jet-form-builder',
		) }
		<hr/>
		{ __( 'Example:', 'jet-form-builder' ) + ' ' }
		<code>2022-02-24T04:25</code>
		<hr/>
		{ __( `Optionally accepts `, 'jet-form-builder' ) }
		<code>false</code>
		{ __( ` to use the user’s local timezone instead of UTC (default: `, 'jet-form-builder' ) }
		<code>true</code>
		{ __( `).`, 'jet-form-builder' ) }
		<hr/>
		{ __( 'Example:', 'jet-form-builder' ) + ' ' }
		<code style={{ fontSize: '12px' }}>toDateTime(false)</code>
	</>;
}

ToDateTimeFilter.prototype = Object.create( BaseFilter.prototype );

export default ToDateTimeFilter;