import {
	getErrorNode,
	getInheritValidationType,
	getNodeValidationType,
	getValidationMessages,
	getWrapper,
	setRestrictions,
} from './functions';

const {
	      ReportingInterface,
      } = JetFormBuilderAbstract;

const {
	      allRejected,
      } = JetFormBuilderFunctions;

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

	/**
	 * Computed property which contain all attrs
	 * for all supported restrictions
	 *
	 * @see AdvancedRestriction.onReady
	 *
	 * @type {String[]}
	 */
	this.watchAttrs = [];

	this.queue = [];
}

AdvancedReporting.prototype = Object.create( ReportingInterface.prototype );

AdvancedReporting.prototype.skipServerSide = true;
AdvancedReporting.prototype.hasServerSide  = false;
AdvancedReporting.prototype.isProcess      = null;
AdvancedReporting.prototype.queue          = [];

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
AdvancedReporting.prototype.reportRaw = function ( validationErrors ) {
	let message = '';

	for ( const validationError of validationErrors ) {
		message = validationError.getMessage();

		if ( message?.length ) {
			break;
		}
	}

	this.insertError( message );
};
AdvancedReporting.prototype.setInput         = function ( input ) {
	this.messages = getValidationMessages( input.nodes[ 0 ] );

	ReportingInterface.prototype.setInput.call( this, input );
};
/**
 * @since 3.0.5 Introduced
 */
AdvancedReporting.prototype.observeAttrs     = function () {
	for ( const watchAttr of this.watchAttrs ) {
		if ( !this.input.attrs.hasOwnProperty( watchAttr ) ) {
			continue;
		}
		/**
		 * @type {BaseHtmlAttr}
		 */
		const attr = this.input.attrs[ watchAttr ];

		attr.value.watch( () => {
			this.valuePrev = null;
			this.validateOnBlur();
		} );
	}
};
AdvancedReporting.prototype.clearReport      = function () {
	const node = getWrapper( this.getNode() );
	node.classList.remove( 'field-has-error' );

	const error = getErrorNode( node );

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
	const error = getErrorNode( node );

	if ( error ) {
		error.innerHTML = message;

		return error;
	}

	const div = document.createElement( 'div' );

	div.classList.add( 'error-message' );
	div.innerHTML = message;

	return div;
};
AdvancedReporting.prototype.validateOnChange = function ( addToQueue = false ) {
	const callback = () => {
		this.input.getContext().silence = false;

		this.validate().
			then( () => {} ).
			catch( () => {} ).
			finally( () => {
				this.isProcess = null;

				const queue = [ ...this.queue ];
				this.queue  = [];

				if ( !queue.length ) {
					return;
				}

				this.valuePrev = null;
				queue.forEach( current => current() );
			} );
	};

	/**
	 * @link https://github.com/Crocoblock/issues-tracker/issues/1766
	 */
	if ( addToQueue && this.isProcess ) {
		this.queue = [ callback ];
	}

	if ( this.isProcess ) {
		return;
	}

	this.isProcess = true;

	callback();
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

	this.input.getContext().silence = false;

	this.validate().
		then( () => {} ).
		catch( () => {} ).
		finally( () => {
			this.skipServerSide = true;
			this.hasServerSide  = false;
			this.isProcess      = null;
		} );
};

AdvancedReporting.prototype.validateOnChangeState = function () {
	if ( this.isProcess ) {
		return Promise.resolve();
	}
	this.isProcess      = true;
	this.skipServerSide = false;

	return new Promise( ( resolve, reject ) => {
		this.validate().then( resolve ).catch( reject ).finally(
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