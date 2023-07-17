function Restriction() {
	/**
	 * @type {ReportingInterface}
	 */
	this.reporting = null;
	/**
	 * You can override this property
	 * if you want to make this Restriction overridable
	 *
	 * @since 3.1.0
	 *
	 * @type {string}
	 */
	this.type = '';
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
	 * @since 3.1.0
	 * @returns {string}
	 */
	getType: function () {
		return this.type;
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