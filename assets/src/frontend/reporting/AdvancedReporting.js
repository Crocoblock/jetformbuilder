import ReportingInterface from './ReportingInterface';
import { getValidationMessages, getValidationType } from './functions';
import NotEmptyRestriction from './restrictions/NotEmptyRestriction';

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
		this.type = getValidationType( node );

		return !!this.type?.length;
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
			this.isRequired ? this.getPreparedRestrictions() : []
		);
	}

	getPreparedRestrictions() {
		return this.getRestrictions().map( item => new item( this ) );
	}

	getRestrictions() {
		return [
			NotEmptyRestriction,
		];
	}

	insertError( message ) {
		const node  = this.getNode();
		const error = this.createError( node, message );

		node.classList.add( 'field-has-error' );

		if ( !error.isConnected ) {
			node.appendChild( error );
		}
	}

	createError( node, message ) {
		const error = node.querySelector( '.error-message' );

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