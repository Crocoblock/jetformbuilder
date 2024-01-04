import { FORMAT } from './constants';

const {
	      InputData,
      } = JetFormBuilderAbstract;

const {
	      isEmpty,
      } = JetFormBuilderFunctions;

const {
	      field_format = FORMAT,
	      layout       = 'single',
      } = window?.JetABAFInput ?? {};

const {
	      per_nights,
	      one_day_bookings,
      } = window?.JetABAFData ?? {};

function CheckOutInput() {
	InputData.call( this );

	/**
	 * Sanitize value to the convenient format
	 */
	this.sanitize( function formatDate( dates ) {
		if ( isEmpty( dates ) || (
			!Array.isArray( dates ) && 'string' !== typeof dates
		) ) {
			return [];
		}
		if ( Array.isArray( dates ) ) {
			return dates;
		}
		dates = dates.split( ' - ' );

		if ( !dates.length ) {
			return [];
		}

		// convert to default format
		return dates.map(
			currentDate => moment( currentDate, field_format ).format( FORMAT ),
		);
	} );

	this.isSupported = function ( node ) {
		return 'checkin-checkout' === node.dataset.field;
	};

	this.addListeners = function () {
		const [ node ] = this.nodes;

		jQuery( node ).on( 'change.JetFormBuilderMain', () => {
			this.value.current = node.value;
		} );

		const inputs = node.parentElement.querySelectorAll(
			'.jet-abaf-field__input',
		);

		for ( const input of inputs ) {
			input.addEventListener( 'blur', () => this.reportOnBlur() );
		}
	};

	this.setValue = function () {
		this.value.current = this.value.applySanitizers(
			this.nodes[ 0 ].value,
		);
	};

	/**
	 * @link https://github.com/Crocoblock/issues-tracker/issues/1562
	 *
	 * @returns {boolean}
	 */
	this.checkIsRequired = function () {
		const [ node ] = this.nodes;

		if ( node.required ) {
			return true;
		}

		return !!node.parentElement.querySelector(
			'.jet-abaf-field__input[required]',
		);
	};

	this.setNode = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.inputType = 'checkin-checkout';

		if ( 'single' === layout ) {
			return;
		}

		const fieldsWrapper = node.closest( '.jet-abaf-separate-fields' );

		this.nodes.push(
			...fieldsWrapper.querySelectorAll(
				'.jet-abaf-field__input[type="text"]' ),
			fieldsWrapper,
		);
	};
}

CheckOutInput.prototype = Object.create( InputData.prototype );

CheckOutInput.prototype.parseValueForCalculated = function () {

	if ( !this.getValue().length ) {
		return 0;
	}

	// because the global JetBooking object was added recently
	if ( window?.JetBooking?.calcBookedDates ) {
		/**
		 * We need to transform dates from 'YYYY-MM-DD' format to
		 * users format, which they have chosen
		 * in Check-in/check-out dates field settings, for correct usage of
		 * `JetBooking.calcBookedDates` method
		 *
		 * @type {string[]}
		 */
		const dates = this.getValue().map( singleDate => (
			moment( singleDate, FORMAT ).format( field_format )
		) );

		return JetBooking.calcBookedDates( dates.join( ' - ' ) );
	}

	if ( one_day_bookings ) {
		return 1;
	}

	/**
	 * Just pass moment function, because we store dates in
	 * ISO 8601 string format
	 *
	 * @type {*[]}
	 */
	const dates = this.value.current.map( date => moment( date ) );

	let value = dates[ 1 ].diff( dates[ 0 ], 'days' );
	value     = Number( value );

	if ( !per_nights ) {
		value++;
	}

	return value;
};

export default CheckOutInput;