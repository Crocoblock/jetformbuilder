import { getMessageBySlug, getSupportedMacros } from '../functions';

function Restriction() {
	/**
	 * @type {AdvancedReporting}
	 */
	this.reporting = null;
	this.macros = {};
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
		this.macros    = this.getSupportedMacros();
	},
	/**
	 * @return {Object}
	 */
	getSupportedMacros: function () {
		return getSupportedMacros( this );
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
			validationResult = this.validate();
		}
		catch ( error ) {
			return Promise.reject( error?.message ?? error );
		}

		return validationResult
		       ? Promise.resolve()
		       : Promise.reject( 'validate is wrong' );
	},
	getMessage: function () {
		if ( !Object.keys( this.macros )?.length ) {
			return this.getRawMessage();
		}
		return this.getRawMessage().replace(
			/%(.+?)%/g,
			( all, fullMacro ) => {
				let [ macro, ...filters ] = fullMacro.split( '|' );

				if ( !this.macros.hasOwnProperty( macro ) ) {
					return all;
				}

				/**
				 * @type {DynamicMacro}
				 */
				macro = this.macros[ macro ];
				macro.setFilters( filters );

				return macro.apply();
			},
		);
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