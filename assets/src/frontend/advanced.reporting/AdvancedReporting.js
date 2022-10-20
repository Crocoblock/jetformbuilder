import {
	getInheritValidationType,
	getNodeValidationType,
	getValidationMessages, getWrapper,
	setRestrictions,
} from './functions';

const {
	      ReportingInterface,
      } = JetFormBuilderAbstract;
const {
	      allRejected,
      } = JetFormBuilderFunctions;

/**
 * @this {ReportingInterface}
 * @constructor
 */
function AdvancedReporting() {
	ReportingInterface.call( this );

	this.type = 'inherit';
	/**
	 * @type {Restriction[]}
	 */
	this.restrictions = [];
	this.messages = {};
}

AdvancedReporting.prototype = Object.create( ReportingInterface.prototype );

AdvancedReporting.prototype.isSupported     = function ( node, input ) {
	this.type = getNodeValidationType( node );

	const inherit = 'inherit' === this.type
	                ? getInheritValidationType( input )
	                : this.type;

	return !!inherit?.length;
};
AdvancedReporting.prototype.isValid         = async function () {
	const promises = [];

	for ( const restriction of this.restrictions ) {
		promises.push( ( resolve, reject ) => {
			restriction.validatePromise().then( resolve ).catch( () => {
				reject( restriction );
			} );
		} );
	}

	return await allRejected( promises );
};
AdvancedReporting.prototype.report          = function ( validationErrors ) {
	this.insertError( validationErrors[ 0 ].getMessage() );
};
AdvancedReporting.prototype.setInput        = function ( input ) {
	ReportingInterface.prototype.setInput.call( this, input );

	this.messages = getValidationMessages( input.nodes[ 0 ] );
	/**
	 * @see this.restrictions
	 */
	this.setRestrictions();

	this.hasServerSide = this.restrictions.some(
		current => current.isServerSide(),
	);
};
AdvancedReporting.prototype.setRestrictions = function () {
	return setRestrictions( this );
};
AdvancedReporting.prototype.clearReport     = function () {
	const node = getWrapper( this.getNode() );
	node.classList.remove( 'field-has-error' );

	const error = node.querySelector( '.error-message' );

	if ( !error ) {
		return;
	}

	error.remove();
};
AdvancedReporting.prototype.insertError     = function ( message ) {
	if ( !message ) {
		this.clearReport();

		return;
	}
	const node  = getWrapper( this.getNode() );
	const error = this.createError( node, message );

	node.classList.add( 'field-has-error' );

	if ( !error.isConnected ) {
		node.appendChild( error );
	}
};
AdvancedReporting.prototype.createError     = function ( node, message ) {
	const error = node.querySelector( '.error-message' );

	if ( error ) {
		error.innerHTML = message;

		return error;
	}

	const div = document.createElement( 'div' );

	div.classList.add( 'error-message' );
	div.innerHTML = message;

	return div;
};
AdvancedReporting.prototype.validateOnBlur  = function () {
	this.validateWithNotice().then( () => {} ).catch( () => {} );
};

export default AdvancedReporting;