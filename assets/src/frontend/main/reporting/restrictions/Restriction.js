
function Restriction() {
	/**
	 * @type {ReportingInterface}
	 */
	this.reporting = null;
}

Restriction.prototype = {
	/**
	 * @param node {HTMLElement|HTMLInputElement}
	 * @param reporting {ReportingInterface}
	 */
	isSupported: function ( node, reporting ) {
		return true;
	},

	/**
	 * @param reporting {ReportingInterface}
	 */
	setReporting: function ( reporting ) {
		this.reporting = reporting;
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
	onReady() {
	},
};

export default Restriction;