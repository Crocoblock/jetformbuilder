import {
	getInheritValidationType,
	getNodeValidationType,
	getValidationMessages,
	getWrapper,
	setRestrictions,
} from './functions';

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

	this.type     = 'inherit';
	this.messages = {};
}

AdvancedReporting.prototype = Object.create( ReportingInterface.prototype );

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

/**
 * @param validationErrors {AdvancedRestriction[]|Restriction[]}
 */
AdvancedReporting.prototype.report = function ( validationErrors ) {
	this.insertError( validationErrors[ 0 ].getMessage() );
};
AdvancedReporting.prototype.setInput                    = function ( input ) {
	ReportingInterface.prototype.setInput.call( this, input );

	this.messages = getValidationMessages( input.nodes[ 0 ] );

	this.hasServerSide = this.restrictions.some(
		current => current.isServerSide(),
	);
};
AdvancedReporting.prototype.clearReport                 = function () {
	const node = getWrapper( this.getNode() );
	node.classList.remove( 'field-has-error' );

	const error = node.querySelector( '.error-message' );

	if ( !error ) {
		return;
	}

	error.remove();
};
AdvancedReporting.prototype.insertError                 = function ( message ) {
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
	} else {
		node.appendChild( error );
	}
};
AdvancedReporting.prototype.createError                 = function (
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
AdvancedReporting.prototype.validateWithNoticeDebounced = function ( force = false ) {
	if ( force || !this.hasServerSide ) {
		return this.validateWithNotice().then( () => {} ).catch( () => {} );
	}

	const validateFunc = window._.debounce(
		() => this.validateWithNotice().then( () => {} ).catch( () => {} ),
		1000,
	);

	return validateFunc();
};

AdvancedReporting.prototype.validateOnBlur = function () {
	this.validateWithNotice().then( () => {} ).catch( () => {} );
};

export default AdvancedReporting;