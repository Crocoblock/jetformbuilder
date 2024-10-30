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
	 * @type {Array | null}
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
	validateOnChange () {
	},
	validateOnBlur () {
	},
	/**
	 * Runs on trying to submit form
	 * @see Observable.inputsAreValid
	 *
	 * Runs on changing value, if this field inside page
	 * @see InputData.setPage
	 * @see PageState.updateState
	 *
	 * @return {Promise<boolean>}
	 */
	async validate ( signal = null ) {
        const errors = await this.getErrors( signal );

		this.validityState.current = !Boolean( errors.length );

		if ( !errors.length ) {
			this.clearReport();

			return true;
		}

		// eslint-disable-next-line no-unused-expressions
		!this.input.root.getContext().silence && this.report( errors );

		throw new RestrictionError( errors[ 0 ].name );
	},
	/**
	 * @param  promises {Function[]}
	 * @return {Promise<Array | null>}
	 */
	// eslint-disable-next-line no-unused-vars
	async getErrorsRaw ( promises ) {
		throw new Error( 'getError must return a Promise' );
	},

	/**
	 * @return {Promise<Array | *[] | null>}
	 */
	async getErrors ( signal = null ) {
		if (
			this.input.loading.current ||
			this.input?.callable?.lock?.current ||
			!this.input.isVisible()
		) {
			return [];
		}

		const promises = this.getPromises( signal );

		if (
			!this.hasChangedValue() &&
			this.promisesCount === promises.length &&
			!this.input.stopValidation
		) {
			return this.errors ?? [];
		}

		this.promisesCount = promises.length;
		this.errors        = [];

		if ( !promises.length ) {
			return this.errors;
		}

		this.errors = await this.getErrorsRaw( promises, signal );

		return this.errors;
	},
	report ( validationErrors ) {
		if ( this.input.getContext().reportedFirst ) {
			this.reportRaw( validationErrors );

			return;
		}

		this.input.getContext().reportFirst();

		this.reportFirst( validationErrors );
	},
	/**
	 * @param validationErrors {Restriction[]}
	 */
	// eslint-disable-next-line no-unused-vars
	reportRaw ( validationErrors ) {
		throw new Error( 'report is empty' );
	},
	reportFirst ( validationErrors ) {
		this.report( validationErrors );
	},
	clearReport () {
		throw new Error( 'clearReport is empty' );
	},
	getPromises ( signal = null) {
		const promises = [];

		for ( const restriction of this.restrictions ) {
			if ( !this.canProcessRestriction( restriction ) ) {
				continue;
			}
			this.beforeProcessRestriction( restriction );

			promises.push( ( resolve, reject ) => {
				restriction.validatePromise( signal ).
					then( () => resolve( restriction ) ).
					catch( error => reject( [ restriction, error ] ) );
			} );
		}

		return promises;
	},
	/**
	 * @param  restriction {Restriction}
	 * @return {boolean}
	 */
	// eslint-disable-next-line no-unused-vars
	canProcessRestriction ( restriction ) {
		return true;
	},

	/**
	 * @param restriction {Restriction}
	 */
	// eslint-disable-next-line no-unused-vars
	beforeProcessRestriction ( restriction ) {
	},
	// eslint-disable-next-line jsdoc/require-returns-check
	/**
	 * @param  node  {Element}
	 * @param  input {InputData}
	 *
	 * @return {boolean}
	 */
	// eslint-disable-next-line no-unused-vars
	isSupported ( node, input ) {
		throw new Error( 'isSupported is empty' );
	},
	/**
	 * @param input {InputData}
	 */
	setInput ( input ) {
		this.validityState = new ReactiveVar();
		this.validityState.make();

		this.input = input;
		this.setRestrictions();
		this.filterRestrictions();
	},
	setRestrictions () {
	},
	/**
	 * @return {HTMLInputElement|HTMLElement}
	 */
	getNode () {
		return this.input.nodes[ 0 ];
	},

	hasChangedValue () {
		return this.valuePrev !== this.input.getValue();
	},
	/**
	 * @return {Promise<*>}
	 */
	checkValidity () {
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

		// eslint-disable-next-line no-unused-expressions
		!isSilence && this.report( this.errors || [] );

		return Promise.reject();
	},
	/**
	 * @since 3.0.1
	 *
	 * @return {boolean}
	 */
	hasAutoScroll () {
		return false;
	},
	/**
	 * With the help of filters that add new restrictions,
	 * you can overwrite a particular restriction
	 * if the "type" property is defined in it
	 */
	filterRestrictions () {
		const map = {};

		for ( let [ index, restriction ] of Object.entries(
			this.restrictions ) ) {
			index = restriction.getType() ? restriction.getType() : index;

			map[ index ] = restriction;
		}

		this.restrictions = Object.values( map );
	},
};

export default ReportingInterface;