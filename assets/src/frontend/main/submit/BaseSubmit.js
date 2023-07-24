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
	return this.promises.map( ( { callable } ) => new Promise( callable ) );
};
/**
 * @param callable {Function}
 * @param inputContext {InputData|Boolean}
 */
BaseSubmit.prototype.promise = function ( callable, inputContext = false ) {
	const pathStr = inputContext ? inputContext.path.join( '.' ) : '';

	this.promises = this.promises.filter(
		( { idPath } ) => !idPath || idPath !== pathStr,
	);

	this.promises.push( {
		callable,
		idPath: inputContext ? inputContext.path.join( '.' ) : '',
	} );
};

export default BaseSubmit;