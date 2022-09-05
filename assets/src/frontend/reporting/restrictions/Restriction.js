import { getMessageBySlug } from '../functions';
import { getSupportedMacros } from '../macros/functions';

class Restriction {

	constructor() {
		/**
		 * @type {AdvancedReporting}
		 */
		this.reporting = null;
		this.macros = {};
	}

	/**
	 * @param node {HTMLElement|HTMLInputElement}
	 * @param reporting {AdvancedReporting}
	 */
	isSupported( node, reporting ) {
		return true;
	}

	/**
	 * If returns true -> validation will be
	 * started with 1000 ms delay
	 *
	 * @return {boolean}
	 */
	isServerSide() {
		return false;
	}

	/**
	 * @param reporting {AdvancedReporting}
	 */
	setReporting( reporting ) {
		this.reporting = reporting;
		this.macros    = this.getSupportedMacros();
	}

	/**
	 * @return {Object}
	 */
	getSupportedMacros() {
		return getSupportedMacros( this );
	}

	getValue() {
		return this.reporting.input.value.current;
	}

	/**
	 * @returns {boolean}
	 */
	validate() {
		throw new Error( 'validate is wrong' );
	}

	/**
	 * @return {Promise<*>}
	 */
	async validatePromise() {
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
	}

	getMessage() {
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
	}

	/**
	 * Here you need to return a prepared message,
	 * with processed macros
	 *
	 * @return {string}
	 */
	getRawMessage() {
		return 'Error';
	}

	getMessageBySlug( slug ) {
		return getMessageBySlug( this, slug );
	}

}

export default Restriction;