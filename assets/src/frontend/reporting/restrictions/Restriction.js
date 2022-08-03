import { getMessageBySlug } from '../functions';

class Restriction {

	constructor() {
		/**
		 * @type {AdvancedReporting}
		 */
		this.reporting = null;
	}

	/**
	 * @param reporting {AdvancedReporting}
	 */
	setReporting( reporting ) {
		this.reporting = reporting;
	}

	getValue() {
		return this.reporting.input.value.current;
	}

	/**
	 * @return {boolean}
	 */
	validate() {
		throw new Error( 'validate is wrong' );
	}

	/**
	 * Here you need to return a prepared message,
	 * with processed macros
	 *
	 * @return {string}
	 */
	getMessage() {
		return 'Error';
	}

	getMessageBySlug( slug ) {
		return getMessageBySlug( this, slug );
	}

}

export default Restriction;