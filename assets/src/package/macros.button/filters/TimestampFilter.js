import BaseFilter from '../abstract/BaseFilter';

const {
	      __,
      } = wp.i18n;

function TimestampFilter() {
	BaseFilter.call( this );

	this.label        = () => __( 'Timestamp', 'jet-form-builder' );
	this.fullName     = () => '|T';
	this.isClientSide = true;

	this.help = __(
		`Returns the time stamp. Usually used in conjunction with Date & Datetime and Time Field.`,
		'jet-form-builder',
		'Example\n' +
		'For Date Field\n' +
		'%date_field|T%\n' +
		'Result if date_field is filled with value "2022-10-22"'
	);
}

TimestampFilter.prototype = Object.create( BaseFilter.prototype );

export default TimestampFilter;