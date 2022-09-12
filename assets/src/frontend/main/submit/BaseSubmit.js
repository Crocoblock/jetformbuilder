/**
 * @param form {FormSubmit}
 * @constructor
 */
function BaseSubmit( form ) {
	this.form         = form;
	this.lastResponse = {};
	this.promises     = [];
}

BaseSubmit.prototype.submit      = function () {
	throw new Error( 'You need to replace this callback' );
};
BaseSubmit.prototype.getPromises = function () {
	return this.promises.map( callback => new Promise( callback ) );
};
/**
 * @param callable {Function}
 */
BaseSubmit.prototype.promise = function ( callable ) {
	this.promises.push( callable );
};

export default BaseSubmit;