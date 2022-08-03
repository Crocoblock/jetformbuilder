import { isRequired } from '../observe/functions';

class ReportingInterface {

	constructor() {
		/**
		 * @type {InputData}
		 */
		this.input = null;
		this.isRequired = false;
	}

	validateWithNotice() {
		const errors = this.getErrors();

		if ( errors.length ) {
			this.report( errors );
		}
		else {
			this.clearReport();
		}

		return !errors.length;
	}

	validate() {
		return !this.getErrors()?.length;
	}

	/**
	 * @returns {array}
	 */
	getErrors() {
		return this.isRequired ? this.isValid() : [];
	}

	/**
	 * @param validationErrors {array<Restriction>}
	 * @return void
	 */
	report( validationErrors ) {
		throw new Error( 'report is empty' );
	}

	clearReport() {
		throw new Error( 'clearReport is empty' );
	}

	/**
	 * @return {array}
	 */
	isValid() {
		throw new Error( 'isValid is empty' );
	}

	/**
	 * @param node
	 * @param input
	 *
	 * @return {boolean}
	 */
	isSupported( node, input ) {
		throw new Error( 'isSupported is empty' );
	}

	/**
	 * @param input {InputData}
	 */
	setInput( input ) {
		const [ node ] = input.nodes;

		this.input      = input;
		this.isRequired = isRequired( node );
	}

	/**
	 * @return {HTMLInputElement|HTMLElement}
	 */
	getNode() {
		return this.input.nodes[ 0 ];
	}

}

export default ReportingInterface;