import CheckOutInput from './CheckOutInput';
import { FORMAT } from './constants';

const {
	      BaseSignal,
      } = JetFormBuilderAbstract;

const {
	      layout       = 'single',
	      field_format = FORMAT,
      } = window.JetABAFInput;

function CheckOutSignal() {
	BaseSignal.call( this );

	this.isSupported = function ( node, input ) {
		return input instanceof CheckOutInput;
	};

	this.runSignal = function ( prevValue ) {
		'single' === layout
		? this.runSignalForSingle()
		: this.runSignalForSeparate( prevValue );
	};

	this.runSignalForSingle = function () {
		const [ dateInput ] = this.input.nodes;
		const { current }   = this.input.value;

		if ( !current.length ) {
			dateInput.value = '';

			return;
		}

		dateInput.value = current.map(
			date => moment( date, FORMAT ).format( field_format ),
		).join( ' - ' );
	};

	this.runSignalForSeparate = function ( prevValue ) {
		const [ , startDate, endDate ] = this.input.nodes;
		const { current }              = this.input.value;

		if ( current?.toString?.() === prevValue?.toString?.() ) {
			return;
		}

		if ( !current.length ) {
			startDate.value = '';
			endDate.value   = '';

			this.updateCalendar();

			return;
		}

		startDate.value = moment( current[ 0 ], FORMAT ).format( field_format );
		endDate.value   = moment(
			current[ 1 ] ?? current[ 0 ], // for one-day bookings
			FORMAT,
		).format(
			field_format,
		);

		this.updateCalendar();
	};

	// only for separate layout
	this.updateCalendar = function () {
		const { current }       = this.input.value;
		const [ , , , wrapper ] = this.input.nodes;

		if ( !current.length ) {
			jQuery( wrapper ).data( 'dateRangePicker' ).clear();

			return;
		}

		// console.log( current );
		jQuery( wrapper ).data( 'dateRangePicker' ).setDateRange(
			moment( current[ 0 ] ).format( field_format ),
			// for one-day bookings
			moment( current[ 1 ] ?? current[ 0 ] ).format( field_format ),
			true,
		);
	};
}

CheckOutSignal.prototype = Object.create( BaseSignal.prototype );

export default CheckOutSignal;