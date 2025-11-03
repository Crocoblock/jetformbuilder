import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function ToTimeFilter() {
	BaseFilter.call( this );

	this.label        = () => __( 'toTime', 'jet-form-builder' );
	this.fullName     = () => '|toTime';
	this.docArgument  = Boolean;
	this.isClientSide = true;

	this.help = () => <>
		{ __(
			`Gets the timestamp from the macro and formats it according to the format of the Time Field.`,
			'jet-form-builder',
		) }
		<hr/>
		<hr/>
		{ __( `Optionally accepts `, 'jet-form-builder' ) }
		<code>false</code>
		{ __( ` to use the user’s local timezone instead of UTC (default: `, 'jet-form-builder' ) }
		<code>true</code>
		{ __( `).`, 'jet-form-builder' ) }
		<hr/>
		{ __( 'Example:', 'jet-form-builder' ) + ' ' }
		<code style={{ fontSize: '12px' }}>toTime(false)</code>
	</>;
}

ToTimeFilter.prototype = Object.create( BaseFilter.prototype );

export default ToTimeFilter;