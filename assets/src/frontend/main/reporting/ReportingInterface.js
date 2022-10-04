/**
 * Validation logic: on change input value we run
 * @see ReportingInterface.validateWithNoticeDebounced
 *
 * In that function we clear stored errors
 * @see ReportingInterface.errors
 * check all restrictions again and save errors
 * to the same property.
 *
 * When user tries to submit form we run
 * @see ReportingInterface.validate
 * If there was stored errors - it will return them.
 * Otherwise we check all and save errors.
 *
 * In the case when we run the validation through the
 * @see ReportingInterface.isValid
 * We "block the form" through the "test" property.
 * This property is reactive, and when it changes,
 * the state of the button for submitting the form
 * and the navigation buttons between pages changes.
 *
 */
import { isRequired } from './functions';

function ReportingInterface() {
	/**
	 * @type {InputData}
	 */
	this.input = null;
	this.isRequired = false;
	/**
	 * @type {array|null}
	 */
	this.errors = null;

	// true, when field has server-side restrictions
	this.hasServerSide = false;
}

ReportingInterface.prototype = {
	/**
	 * Runs on changing value in the field
	 * @see InputData.onChange
	 *
	 * @param force
	 */
	validateWithNoticeDebounced: function ( force = false ) {
		if ( force || !this.hasServerSide ) {
			this.validateWithNotice().then( () => {} ).catch( () => {} );

			return;
		}

		const validateFunc = window._.debounce(
			() => this.validateWithNotice().then( () => {} ).catch( () => {} ),
			1000,
		);

		validateFunc();
	},
	/**
	 * @returns {Promise<void>}
	 */
	validateWithNotice: async function () {
		this.errors  = null;
		const errors = await this.getErrors();

		if ( errors.length ) {
			this.report( errors );

			throw new Error( errors[ 0 ].name );
		}
		else {
			this.clearReport();
		}
	},
	/**
	 * Runs on trying to submit form
	 * @see Observable.inputsAreValid
	 *
	 * Runs on changing value, if this field inside page
	 * @see InputData.setPage
	 * @see PageState.updateState
	 *
	 * @returns {Promise<boolean>}
	 */
	validate: async function () {
		const errors = await this.getErrors();

		if ( errors?.length ) {
			throw new Error( errors[ 0 ].name );
		}

		return true;
	},
	/**
	 * @returns {Promise<*[]|array|null>}
	 */
	getErrors: async function () {
		if ( !this.isRequired ||
			this.input.loading.current ||
			!this.input.isVisible()
		) {
			return [];
		}

		if ( Array.isArray( this.errors ) ) {
			return this.errors;
		}

		if ( this.hasServerSide ) {
			this.input.loading.start();
		}

		this.errors = await this.isValid();

		if ( this.hasServerSide ) {
			this.input.loading.end();
		}

		return this.errors;
	},
	/**
	 * @param validationErrors {array<Restriction>}
	 * @return void
	 */
	report: function ( validationErrors ) {
		throw new Error( 'report is empty' );
	},
	clearReport: function () {
		throw new Error( 'clearReport is empty' );
	},
	/**
	 * @returns {Promise<*[]>}
	 */
	isValid: async function () {
		throw new Error( 'isValid is empty' );
	},
	/**
	 * @param node
	 * @param input
	 *
	 * @return {boolean}
	 */
	isSupported: function ( node, input ) {
		throw new Error( 'isSupported is empty' );
	},
	/**
	 * @param input {InputData}
	 */
	setInput: function ( input ) {
		const [ node ] = input.nodes;

		this.input      = input;
		this.isRequired = isRequired( node );
	},
	/**
	 * @return {HTMLInputElement|HTMLElement}
	 */
	getNode: function () {
		return this.input.nodes[ 0 ];
	},
};

export default ReportingInterface;