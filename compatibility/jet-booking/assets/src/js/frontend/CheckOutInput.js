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
      } = window.JetABAFInput;

function CheckOutInput() {
	InputData.call( this );

	/**
	 * @see https://github.com/Crocoblock/jetformbuilder/issues/222
	 * @type {string}
	 */
	this.value.current = '';

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

		if ( 2 !== dates.length ) {
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

export default CheckOutInput;