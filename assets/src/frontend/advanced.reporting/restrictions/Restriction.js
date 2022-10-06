import { getMessageBySlug } from '../functions';

const { CalculatedFormula } = JetFormBuilderAbstract;

function Restriction() {
	/**
	 * @type {AdvancedReporting}
	 */
	this.reporting = null;
	this.message = '';
	/**
	 * @type {CalculatedFormula}
	 */
	this.formula = null;
}

Restriction.prototype = {
	/**
	 * @param node {HTMLElement|HTMLInputElement}
	 * @param reporting {AdvancedReporting}
	 */
	isSupported: function ( node, reporting ) {
		return true;
	},
	/**
	 * Return false from this method so that this constraint
	 * is checked regardless of whether this field is required or not.
	 *
	 * @return {boolean}
	 */
	runOnlyIfRequired: function () {
		return true;
	},
	/**
	 * If returns true -> validation will be
	 * started with 1000 ms delay
	 *
	 * @return {boolean}
	 */
	isServerSide: function () {
		return false;
	},
	/**
	 * @param reporting {AdvancedReporting}
	 */
	setReporting: function ( reporting ) {
		this.reporting = reporting;

		this.formula           = new CalculatedFormula(
			this.getRawMessage(),
			reporting.input,
		);
		this.formula.setResult = () => {
			this.message = this.formula.calculateString();
		};
		this.formula.setResult();
	},
	getValue: function () {
		return this.reporting.input.value.current;
	},
	/**
	 * @returns {boolean}
	 */
	validate: function () {
		throw new Error( 'validate is wrong' );
	},
	/**
	 * @return {Promise<*>}
	 */
	validatePromise: async function () {
		let validationResult;

		try {
			validationResult = await this.validate();
		}
		catch ( error ) {
			return Promise.reject( error?.message ?? error );
		}

		return validationResult
		       ? Promise.resolve()
		       : Promise.reject( 'validate is wrong' );
	},
	getMessage: function () {
		return this.message;
	},
	/**
	 * Here you need to return a prepared message,
	 * with processed macros
	 *
	 * @return {string}
	 */
	getRawMessage: function () {
		return 'Error';
	},
	getMessageBySlug: function ( slug ) {
		return getMessageBySlug( this, slug );
	},
};

export default Restriction;