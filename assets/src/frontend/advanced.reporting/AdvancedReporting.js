import {
	getInheritValidationType,
	getNodeValidationType,
	getValidationMessages,
	getWrapper,
	setRestrictions,
} from './functions';
import { allRejected } from '../main/functions';

const {
	      ReportingInterface,
      } = JetFormBuilderAbstract;

/**
 * @property {AdvancedRestriction} restrictions
 *
 * @this {ReportingInterface}
 * @constructor
 */
function AdvancedReporting() {
	ReportingInterface.call( this );

	this.type           = 'inherit';
	this.messages       = {};
	this.skipServerSide = true;
	this.valuePrev      = null;
	this.promisesCount  = 0;
}

AdvancedReporting.prototype = Object.create( ReportingInterface.prototype );

AdvancedReporting.prototype.skipServerSide = true;
AdvancedReporting.prototype.hasServerSide  = false;
AdvancedReporting.prototype.valuePrev      = null;
AdvancedReporting.prototype.isProcess      = null;

AdvancedReporting.prototype.setRestrictions = function () {
	setRestrictions( this );
};

AdvancedReporting.prototype.isSupported = function ( node, input ) {
	this.type = getNodeValidationType( node );

	const inherit = 'inherit' === this.type
	                ? getInheritValidationType( input )
	                : this.type;

	return !!inherit?.length;
};

AdvancedReporting.prototype.getErrorsRaw = async function ( promises ) {
	if ( this.hasServerSide ) {
		this.input.loading.start();
	}

	const errors   = await allRejected( promises );
	this.valuePrev = this.input.getValue();

	if ( this.hasServerSide ) {
		this.input.loading.end();
	}

	return errors;
};

/**
 * @param validationErrors {AdvancedRestriction[]|Restriction[]}
 */
AdvancedReporting.prototype.report = function ( validationErrors ) {
	this.insertError( validationErrors[ 0 ].getMessage() );
};
AdvancedReporting.prototype.setInput         = function ( input ) {
	ReportingInterface.prototype.setInput.call( this, input );

	this.messages = getValidationMessages( input.nodes[ 0 ] );
};
AdvancedReporting.prototype.clearReport      = function () {
	const node = getWrapper( this.getNode() );
	node.classList.remove( 'field-has-error' );

	const error = node.querySelector( '.error-message' );

	if ( !error ) {
		return;
	}

	error.remove();
};
AdvancedReporting.prototype.insertError      = function ( message ) {
	if ( !message ) {
		this.clearReport();

		return;
	}
	const node  = getWrapper( this.getNode() );
	const error = this.createError( node, message );

	node.classList.add( 'field-has-error' );

	if ( error.isConnected ) {
		return;
	}

	// it can be on fields_layout === 'row'
	const colEnd = node.querySelector( '.jet-form-builder-col__end' );

	if ( colEnd ) {
		colEnd.appendChild( error );
	}
	else {
		node.appendChild( error );
	}
};
AdvancedReporting.prototype.createError      = function (
	node, message ) {
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
AdvancedReporting.prototype.validateOnChange = function () {
	/**
	 * @link https://github.com/Crocoblock/issues-tracker/issues/1766
	 */
	if ( this.isProcess ) {
		return;
	}

	this.isProcess = true;

	this.validateWithNotice().
		then( () => {} ).
		catch( () => {} ).
		finally( () => {
			this.isProcess = null;
		} );
};

AdvancedReporting.prototype.validateOnBlur = function () {
	/**
	 * @link https://github.com/Crocoblock/issues-tracker/issues/1766
	 */
	if ( this.isProcess ) {
		return;
	}

	this.isProcess      = true;
	this.skipServerSide = false;

	this.validateWithNotice().
		then( () => {} ).
		catch( () => {} ).
		finally( () => {
			this.skipServerSide = true;
			this.hasServerSide  = false;
			this.isProcess      = null;
		} );
};

AdvancedReporting.prototype.validateOnChangeState = function ( silence = false ) {
	if ( this.isProcess ) {
		return Promise.resolve();
	}
	this.isProcess      = true;
	this.skipServerSide = false;

	return new Promise( ( resolve, reject ) => {
		const promise = silence ? this.validate() : this.validateWithNotice();

		promise.then( resolve ).catch( reject ).finally(
			() => {
				this.skipServerSide = true;
				this.hasServerSide  = false;
				this.isProcess      = null;
			},
		);
	} );
};

/**
 * @param restriction {AdvancedRestriction|Restriction}
 * @return {boolean}
 */
AdvancedReporting.prototype.canProcessRestriction = function ( restriction ) {
	return (
		// allow all
		!this.skipServerSide ||
		// or only not-ServerSide
		!restriction.isServerSide()
	);
};

/**
 * @param restriction {AdvancedRestriction|Restriction}
 */
AdvancedReporting.prototype.beforeProcessRestriction = function ( restriction ) {
	this.hasServerSide = restriction.isServerSide() ? true : this.hasServerSide;
};

export default AdvancedReporting;