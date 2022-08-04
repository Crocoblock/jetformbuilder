import ReportingInterface from './ReportingInterface';
import {
	getInheritValidationType,
	getNodeValidationType,
	getValidationMessages,
	getValidationType,
} from './functions';
import { getRestrictions } from './restrictions/functions';

class AdvancedReporting extends ReportingInterface {

	constructor() {
		super();

		this.type = 'inherit';

		/**
		 * @type {Restriction[]}
		 */
		this.restrictions = [];
		this.messages = {};
	}

	isSupported( node, input ) {
		this.type = getNodeValidationType( node );

		const inherit = 'inherit' === this.type
		                ? getInheritValidationType( input )
		                : this.type;

		return !!inherit?.length;
	}

	isValid() {
		const invalid = [];

		for ( const restriction of this.restrictions ) {
			if ( restriction.validate() ) {
				continue;
			}
			invalid.push( restriction );
		}

		return invalid;
	}

	report( validationErrors ) {
		this.insertError( validationErrors[ 0 ].getMessage() );
	}

	setInput( input ) {
		super.setInput( input );

		this.messages = getValidationMessages( input.nodes[ 0 ] );

		this.restrictions = (
			this.isRequired ? this.getRestrictions() : []
		);
	}

	getRestrictions() {
		return getRestrictions( this );
	}

	clearReport() {
		const node = this.getNode();
		node.classList.remove( 'field-has-error' );

		const error = node.parentElement.querySelector( '.error-message' );

		if ( !error ) {
			return;
		}

		error.remove();
	}

	insertError( message ) {
		const node  = this.getNode();
		const error = this.createError( node, message );

		node.classList.add( 'field-has-error' );

		if ( !error.isConnected ) {
			node.parentElement.appendChild( error );
		}
	}

	createError( node, message ) {
		const error = node.parentElement.querySelector( '.error-message' );

		if ( error ) {
			error.innerHTML = message;

			return error;
		}

		const div = document.createElement( 'div' );

		div.classList.add( 'error-message' );
		div.innerHTML = message;

		return div;
	}

}

export default AdvancedReporting;