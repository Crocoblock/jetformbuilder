import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function ToDateFilter() {
	BaseFilter.call( this );

	this.fullName     = () => 'toDate';
	this.isClientSide = true;

	this.help = () => <>
		{ __(
			`Gets the timestamp from the macro and formats it according 
		to the format of the Date Field.`,
			'jet-form-builder',
		) }
		<hr/>
		{ __( 'Example:', 'jet-form-builder' ) + ' ' }
		<code>2022-02-24</code>
	</>;
}

ToDateFilter.prototype = Object.create( BaseFilter.prototype );

export default ToDateFilter;