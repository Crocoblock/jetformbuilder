
class BaseSubmit {

	/**
	 * @param form {FormSubmit}
	 */
	constructor( form ) {
		this.form = form;
		this.lastResponse = {};
		this.promises = [];
	}

	submit() {
		throw new Error( 'You need to replace this callback' );
	}

	getPromises() {
		return this.promises.map( callback => new Promise( callback ) );
	}

	/**
	 * @param callable {Function}
	 */
	promise( callable ) {
		this.promises.push( callable );
	}

}

export default BaseSubmit;