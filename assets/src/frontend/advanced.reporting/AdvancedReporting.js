import {
	getInheritValidationType,
	getNodeValidationType,
	getValidationMessages,
	setRestrictions,
} from './functions';

const { ReportingInterface } = JetFormBuilderAbstract;

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

	this.isSupported     = function ( node, input ) {
		this.type = getNodeValidationType( node );

		const inherit = 'inherit' === this.type
		                ? getInheritValidationType( input )
		                : this.type;

		return !!inherit?.length;
	};
	this.isValid         = async function () {
		const promises = [];

		for ( const restriction of this.restrictions ) {
			promises.push( ( resolve, reject ) => {
				restriction.validatePromise().then( resolve ).catch( () => {
					reject( restriction );
				} );
			} );
		}

		const results = await Promise.allSettled(
			promises.map( current => new Promise( current ) ),
		);

		const invalid = results.filter(
			( { status } ) => 'rejected' === status,
		);

		return invalid.map( ( { reason, value } ) => (
			reason ?? value
		) );
	};
	this.report          = function ( validationErrors ) {
		this.insertError( validationErrors[ 0 ].getMessage() );
	};
	this.setInput        = function ( input ) {
		ReportingInterface.prototype.setInput.call( this, input );

		this.messages = getValidationMessages( input.nodes[ 0 ] );

		if ( !this.isRequired ) {
			return;
		}

		/**
		 * @see this.restrictions
		 */
		this.setRestrictions();

		this.hasServerSide = this.restrictions.some(
			current => current.isServerSide(),
		);
	};
	this.setRestrictions = function () {
		return setRestrictions( this );
	};
	this.clearReport     = function () {
		const node = this.getNode();
		node.classList.remove( 'field-has-error' );

		const error = node.parentElement.querySelector( '.error-message' );

		if ( !error ) {
			return;
		}

		error.remove();
	};
	this.insertError     = function ( message ) {
		const node  = this.getNode();
		const error = this.createError( node, message );

		node.classList.add( 'field-has-error' );

		if ( !error.isConnected ) {
			node.parentElement.appendChild( error );
		}
	};
	this.createError     = function ( node, message ) {
		const error = node.parentElement.querySelector( '.error-message' );

		if ( error ) {
			error.innerHTML = message;

			return error;
		}

		const div = document.createElement( 'div' );

		div.classList.add( 'error-message' );
		div.innerHTML = message;

		return div;
	};
}

AdvancedReporting.prototype = Object.create( ReportingInterface.prototype );

export default AdvancedReporting;