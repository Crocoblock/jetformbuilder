import { countSelected, getLimits, getOptions, getWrapper, isSelected } from './functions';
import observeSelectAutocomplete from './selectAutocomplete';

const { doAction } = JetPlugins.hooks;

export default class SelectionLimit {
	constructor( input ) {
		this.input = input;
		this.wrapper = getWrapper( input );
		this.blocked = new Set();
		this.error = null;
		this.autocomplete = observeSelectAutocomplete( this );
		this.focusWrapper = this.autocomplete?.wrapper ?? this.wrapper;
		this.observePointer();

		this.unwatch = input.watch( () => this.update() );
		this.onBlur = event => {
			// Clicking a label briefly blurs the current checkbox before focusing the next one.
			this.pendingBlur = !event.relatedTarget && this.isPointerInside;
			if ( this.pendingBlur || this.focusWrapper.contains( event.relatedTarget ) || !input.isVisible() ) {
				return;
			}
			if ( this.autocomplete ) {
				this.scheduleReportOnBlur();
				return;
			}
			this.reportOnBlur();
		};
		this.focusWrapper.addEventListener( 'focusout', this.onBlur );
		this.observer = new MutationObserver( () => this.update() );
		this.observer.observe( this.wrapper, { childList: true, subtree: true } );
		this.update();
	}

	observePointer() {
		this.isPointerInside = false;
		this.pendingBlur = false;
		this.onMouseDown = () => {
			this.isPointerInside = true;
		};
		this.onMouseUp = () => {
			this.isPointerInside = false;
			if ( this.pendingBlur ) {
				this.pendingBlur = false;
				this.scheduleReportOnBlur();
			}
		};
		this.focusWrapper.addEventListener( 'mousedown', this.onMouseDown, true );
		this.focusWrapper.addEventListener( 'mouseup', this.onMouseUp, true );
		this.focusWrapper.addEventListener( 'mouseleave', this.onMouseUp );
	}

	scheduleReportOnBlur() {
		clearTimeout( this.blurTimer );
		this.blurTimer = setTimeout( () => this.reportOnBlur(), 0 );
	}

	reportOnBlur() {
		if ( this.destroyed || !this.focusWrapper.isConnected || !this.input.isVisible() || this.focusWrapper.contains( this.focusWrapper.ownerDocument.activeElement ) ) {
			return;
		}
		if ( this.input.reporting.type ) {
			this.input.reportOnBlur();
		} else {
			this.validateAndShowError();
		}
	}

	setBlocked( node, blocked ) {
		if ( blocked && !node.disabled ) {
			node.disabled = true;
			this.blocked.add( node );
		} else if ( !blocked && this.blocked.has( node ) ) {
			node.disabled = false;
			this.blocked.delete( node );
		}
		const choice = node.closest( '.jet-form-builder-choice--item' );
		if ( choice ) {
			choice.classList.toggle( 'is-disabled', node.disabled );
			choice.setAttribute( 'aria-disabled', String( node.disabled ) );
		}
		doAction( 'jet.fb.option.selectionLimit.disabled', node, this.input, this );
	}

	update() {
		this.autocomplete?.update();
		const limits = getLimits( this.input );
		const full = limits.max > 0 && countSelected( this.input ) >= limits.max;
		for ( const node of getOptions( this.input ) ) {
			this.setBlocked( node, full && !isSelected( node ) );
		}
		if ( this.input.addNewButton ) {
			this.setBlocked( this.input.addNewButton, full );
		}
		if ( this.error ) {
			this.validateAndShowError();
		}
	}

	validateAndShowError() {
		const restriction = this.input.reporting.restrictions.find( item => (
			[ 'min_selections', 'max_selections' ].includes( item.getType() ) && !item.validate()
		) );
		if ( restriction ) {
			this.showError( restriction.getMessage() );
		} else {
			this.clearError();
		}
	}

	showError( message ) {
		const wrapper = this.input.getWrapperNode();
		if ( !wrapper ) {
			return false;
		}
		if ( !this.error ) {
			this.error = document.createElement( 'div' );
			this.error.className = 'error-message jet-form-builder__error';
			this.error.id = `jfb-${ this.input.getSubmit().getFormId() }-${ this.input.rawName }-selections-error`.replace( /[^\w-]/g, '-' );
			this.error.setAttribute( 'role', 'alert' );
			const colEnd = wrapper.querySelector( '.jet-form-builder-col__end' );
			( colEnd || wrapper ).appendChild( this.error );
		}
		this.error.textContent = message;
		wrapper.classList.add( 'field-has-error' );
		for ( const node of this.getErrorNodes() ) {
			node.setAttribute( 'aria-invalid', 'true' );
			const describedBy = new Set( ( node.getAttribute( 'aria-describedby' ) || '' ).split( /\s+/ ).filter( Boolean ) );
			describedBy.add( this.error.id );
			node.setAttribute( 'aria-describedby', [ ...describedBy ].join( ' ' ) );
		}
		return true;
	}

	getErrorNodes() {
		if ( this.autocomplete ) {
			return this.autocomplete.getErrorNodes();
		}
		return Array.from( this.input.nodes, node => node.closest( '.jet-form-builder-choice--item' ) || node );
	}

	clearError() {
		if ( !this.error ) {
			return;
		}
		for ( const node of this.getErrorNodes() ) {
			node.removeAttribute( 'aria-invalid' );
			const describedBy = ( node.getAttribute( 'aria-describedby' ) || '' ).split( /\s+/ ).filter( id => id && id !== this.error.id );
			if ( describedBy.length ) {
				node.setAttribute( 'aria-describedby', describedBy.join( ' ' ) );
			} else {
				node.removeAttribute( 'aria-describedby' );
			}
		}
		this.error.remove();
		this.error = null;
		const wrapper = this.input.getWrapperNode();
		if ( !wrapper?.querySelector( '.error-message' ) ) {
			wrapper?.classList.remove( 'field-has-error' );
		}
	}

	destroy() {
		if ( this.destroyed ) {
			return;
		}
		this.destroyed = true;
		clearTimeout( this.blurTimer );
		this.focusWrapper.removeEventListener( 'mousedown', this.onMouseDown, true );
		this.focusWrapper.removeEventListener( 'mouseup', this.onMouseUp, true );
		this.focusWrapper.removeEventListener( 'mouseleave', this.onMouseUp );
		this.focusWrapper.removeEventListener( 'focusout', this.onBlur );
		this.clearError();
		this.autocomplete?.destroy();
		this.unwatch();
		this.observer.disconnect();
		for ( const node of this.blocked ) {
			this.setBlocked( node, false );
		}
	}
}
