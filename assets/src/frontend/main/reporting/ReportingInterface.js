/**
 * Validation logic: on change input value we run
 * @see ReportingInterface.validateOnChange
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
import RestrictionError from './RestrictionError';

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
	this.restrictions = [];

	this.valuePrev = null;
}

ReportingInterface.prototype = {
	/**
	 * @type {Restriction[]}
	 */
	restrictions: [],
	valuePrev: null,
	/**
	 * Runs on changing value in the field
	 * @see InputData.onChange
	 *
	 * @param force
	 */
	validateOnChange: function ( force = false ) {
	},
	validateOnBlur: function () {
	},
	/**
	 * @returns {Promise<void>}
	 */
	validateWithNotice: async function () {
		const errors = await this.getErrors();

		if ( errors.length ) {
			this.report( errors );

			throw new RestrictionError( errors[ 0 ].name );
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
			throw new RestrictionError( errors[ 0 ].name );
		}

		return true;
	},
	/**
	 * @returns {Promise<*[]|array|null>}
	 */
	getErrors: async function () {
		throw new Error( 'getError must return a Promise' );
	},
	/**
	 * @param validationErrors {Restriction[]}
	 * @return void
	 */
	report: function ( validationErrors ) {
		throw new Error( 'report is empty' );
	},
	clearReport: function () {
		throw new Error( 'clearReport is empty' );
	},
	getPromises: function () {
		const promises = [];

		for ( const restriction of this.restrictions ) {
			if ( !this.canProcessRestriction( restriction ) ) {
				continue;
			}
			this.beforeProcessRestriction( restriction );

			promises.push( ( resolve, reject ) => {
				restriction.validatePromise().
					then( () => resolve( restriction ) ).
					catch( () => reject( restriction ) );
			} );
		}

		return promises;
	},
	/**
	 * @param restriction {Restriction}
	 * @return {Boolean}
	 */
	canProcessRestriction: function ( restriction ) {
		return true;
	},

	/**
	 * @param restriction {Restriction}
	 */
	beforeProcessRestriction: function ( restriction ) {
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
		this.input = input;
		this.setRestrictions();
	},
	setRestrictions: function () {
	},
	/**
	 * @return {HTMLInputElement|HTMLElement}
	 */
	getNode: function () {
		return this.input.nodes[ 0 ];
	},

	hasChangedValue: function () {
		return this.valuePrev !== this.input.getValue();
	},
};

export default ReportingInterface;