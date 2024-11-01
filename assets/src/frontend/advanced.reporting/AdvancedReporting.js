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
 * @property {AdvancedRestriction} restrictions List of advanced restrictions
 *
 * @this {ReportingInterface}
 * @class
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
	 * @type {string[]}
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

AdvancedReporting.prototype.getErrorsRaw = async function ( promises, signal = null ) {
	if ( this.hasServerSide ) {
		this.input.loading.start();
	}

	let errors = await allRejected( promises );

	this.valuePrev = this.input.getValue();

	if ( this.hasServerSide ) {
		this.input.loading.end();
	}

	if ( signal?.aborted ) {
		errors = [];
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

	if ( !message ) {
		this.clearReport();

		return;
	}

	this.insertError( message );
};
AdvancedReporting.prototype.setInput = function ( input ) {
	this.messages = getValidationMessages( input.nodes[ 0 ] );

	ReportingInterface.prototype.setInput.call( this, input );
};
/**
 * @since 3.0.5 Introduced
 */
AdvancedReporting.prototype.observeAttrs = function () {
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
AdvancedReporting.prototype.clearReport = function () {
	const inner = () => {
		const node = getWrapper( this.getNode() );

		if ( !node ) {
			return;
		}

		node.classList.remove( 'field-has-error' );

		const error = getErrorNode( node );

		if ( !error ) {
			return;
		}

		error.remove();
	};
	inner();
	this.makeValid();
};
AdvancedReporting.prototype.insertError = function ( message ) {
	const inner = () => {
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
	inner();
	this.makeInvalid();
};
AdvancedReporting.prototype.createError = function (
	node, message ) {
	const error = getErrorNode( node );

	if ( error ) {
		error.innerHTML = message;

		return error;
	}

	const inputNode = this.getNode();
	const div       = document.createElement( 'div' );

	div.classList.add( 'error-message' );
	div.innerHTML = message;
	div.id        = inputNode.id + '__error';

	return div;
};

AdvancedReporting.prototype.makeInvalid = function () {
	const wrapper   = getWrapper( this.getNode() );
	const errorNode = getErrorNode( wrapper );

	this.getNode().setAttribute( 'aria-invalid', 'true' );
	this.getNode().setAttribute(
		'aria-describedby',
		errorNode?.id ?? false,
	);
};

AdvancedReporting.prototype.makeValid = function () {
	this.getNode().removeAttribute( 'aria-invalid' );
	this.getNode().removeAttribute( 'aria-describedby' );
};

AdvancedReporting.prototype.validateOnChange = function ( addToQueue = false ) {

	this.switchButtonsState( true );

	const callback = () => {
		this.input.getContext().setSilence( false );

		this.validate().
			then( () => {} ).
			catch( () => {} ).
			finally( () => {
				this.isProcess = null;

				const queue = [ ...this.queue ];
				this.queue  = [];

				if ( !queue.length ) {
					this.switchButtonsState();
					return;
				}

				this.valuePrev = null;
				queue.forEach( current => current() );

				this.switchButtonsState();
			} );
	};

	/**
	 * @see https://github.com/Crocoblock/issues-tracker/issues/1766
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

AdvancedReporting.prototype.validateOnBlur = function ( signal = null ) {
	/**
	 * @see https://github.com/Crocoblock/issues-tracker/issues/1766
	 */
	if ( this.isProcess ) {
		return;
	}

	this.isProcess      = true;
	this.skipServerSide = false;

	this.switchButtonsState( true );
	this.canSubmitForm( false );

	this.input.getContext().setSilence( false );

	this.validate( signal ).
		then( () => {} ).
		catch( () => {} ).
		finally( () => {
			this.skipServerSide = true;
			this.hasServerSide  = false;
			this.isProcess      = null;

			this.input.nodes[0].readOnly = false;

			if ( !signal?.aborted ) {
				this.switchButtonsState();
				this.canSubmitForm();
			}
		} );
};

AdvancedReporting.prototype.switchButtonsState = function( force = false ) {
	const parentPage = this.input.nodes[0].closest( '.jet-form-builder-page' );

	if ( parentPage && !this.input.getContext().silence ) {
		const switchButtons = parentPage.querySelectorAll(
			'.jet-form-builder__next-page, .jet-form-builder__prev-page, .jet-form-builder__action-button'
		);

		for ( const switchButton of switchButtons ) {

			if ( !switchButton.classList.contains( 'jet-form-builder__submit' ) && !this.isNodeBelongThis( switchButton ) ) {
				continue;
			}

			if ( !switchButton.classList.contains('jet-form-builder__prev-page') ) {
				switchButton.disabled = force === true || !this.validityState.current;
			} else {
				switchButton.disabled = force;
			}
		}
	}
}

AdvancedReporting.prototype.canTriggerEnterSubmit = function( canTrigger = true ) {
	const form = this.input.root.form;

	if ( form ) {
		form.canTriggerEnterSubmit = canTrigger;
	}
}

AdvancedReporting.prototype.canSubmitForm = function( canSubmit = true ) {
	const form = this.input.root.form;

	if ( form ) {
		form.canSubmitForm = canSubmit;
	}
}

AdvancedReporting.prototype.isNodeBelongThis = function( node ) {
	const parentPage = node.closest( '.jet-form-builder-page' );

	return parentPage ? !parentPage.classList.contains( 'jet-form-builder-page--hidden' ) : false;
}

AdvancedReporting.prototype.validateOnChangeState = function () {
	if ( this.isProcess ) {
		return Promise.resolve();
	}

	this.switchButtonsState( true );
	this.canTriggerEnterSubmit( false );

	if ( this.input.maskValidation ) {
		this.input.changeStateMaskValidation();
	}

	this.isProcess      = true;
	this.skipServerSide = false;

	return new Promise( ( resolve, reject ) => {
		this.validate().then( resolve ).catch( reject ).finally(
			() => {
				this.skipServerSide = true;
				this.hasServerSide  = false;
				this.isProcess      = null;

				this.input.nodes[0].readOnly = false;

				this.switchButtonsState();
				this.canTriggerEnterSubmit();
			},
		);
	} );
};

/**
 * @param  restriction {AdvancedRestriction|Restriction}
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
