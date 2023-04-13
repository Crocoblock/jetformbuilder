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
import ReactiveVar from '../reactive/ReactiveVar';

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

	this.valuePrev     = null;
	this.validityState = null;
	this.promisesCount = 0;
}

ReportingInterface.prototype = {
	/**
	 * @type {Restriction[]}
	 */
	restrictions: [],
	valuePrev: null,
	/**
	 * @type {ReactiveVar}
	 */
	validityState: null,
	promisesCount: 0,
	/**
	 * Runs on changing value in the field
	 * @see InputData.onChange
	 */
	validateOnChange: function () {
	},
	validateOnBlur: function () {
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
		/**
		 * We need to skip the validation in case with dynamic attrs
		 * @since 3.0.4
		 *
		 * @see https://github.com/Crocoblock/issues-tracker/issues/2710#issuecomment-1502911797
		 */
		if ( !this.input.root.isObserved ) {
			return true;
		}
		const errors = await this.getErrors();

		this.validityState.current = !Boolean( errors.length );

		if ( !errors.length ) {
			this.clearReport();

			return true;
		}

		!this.input.root.getContext().silence && this.report( errors );

		throw new RestrictionError( errors[ 0 ].name );
	},
	/**
	 * @param promises {Function[]}
	 * @return {Promise<array|null>}
	 */
	getErrorsRaw: async function ( promises ) {
		throw new Error( 'getError must return a Promise' );
	},

	/**
	 * @return {Promise<array|*[]|null>}
	 */
	getErrors: async function () {
		if (
			this.input.loading.current ||
			this.input?.callable?.lock?.current ||
			!this.input.isVisible()
		) {
			return [];
		}

		const promises = this.getPromises();

		if (
			!this.hasChangedValue() &&
			this.promisesCount === promises.length
		) {
			return this.errors ?? [];
		}

		this.promisesCount = promises.length;
		this.errors        = [];

		if ( !promises.length ) {
			return this.errors;
		}

		this.errors = await this.getErrorsRaw( promises );

		return this.errors;
	},
	report: function ( validationErrors ) {
		if ( this.input.getContext().reportedFirst ) {
			this.reportRaw( validationErrors );

			return;
		}

		this.input.getContext().reportFirst();

		this.reportFirst( validationErrors );
	},
	/**
	 * @param validationErrors {Restriction[]}
	 * @return void
	 */
	reportRaw: function ( validationErrors ) {
		throw new Error( 'report is empty' );
	},
	reportFirst: function ( validationErrors ) {
		this.report( validationErrors );
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
					catch( error => reject( [ restriction, error ] ) );
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
		this.validityState = new ReactiveVar();
		this.validityState.make();

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
	/**
	 * @returns {Promise<*>}
	 */
	checkValidity: function () {
		const isSilence = this.input.getContext().silence;

		if ( null === this.validityState.current ) {
			return this.validateOnChangeState();
		}
		if ( this.validityState.current ) {
			return Promise.resolve();
		}

		if ( isSilence ) {
			return Promise.reject();
		}

		!isSilence && this.report( this.errors || [] );

		return Promise.reject();
	},
	/**
	 * @since 3.0.1
	 *
	 * @return {boolean}
	 */
	hasAutoScroll: function () {
		return false;
	},
};

export default ReportingInterface;