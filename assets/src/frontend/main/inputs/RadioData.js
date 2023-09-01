import InputData from './InputData';
import ReactiveHook from '../reactive/ReactiveHook';
import { STRICT_MODE } from '../signals/BaseSignal';
import { getParsedName } from './functions';

function RadioData() {
	InputData.call( this );

	this.wrapper = null;

	this.isSupported    = function ( node ) {
		return (
			node.classList.contains( 'checkradio-wrap' ) &&
			node.querySelector( '.radio-wrap' )
		);
	};
	this.addListeners   = function () {
		this.enterKey = new ReactiveHook();

		this.wrapper.addEventListener( 'change', () => this.setValue( true ) );
		this.wrapper.addEventListener(
			'keydown',
			this.handleEnterKey.bind( this ),
		);
		this.wrapper.addEventListener( 'focusout', event => {
			if ( [ ...this.nodes ].includes( event?.relatedTarget ) ) {
				return;
			}
			this.reportOnBlur();
		} );

		!STRICT_MODE && jQuery( this.wrapper ).on( 'change', event => {
			if ( this.value.current == event.target.value ) {
				return;
			}
			this.callable.lockTrigger();
			this.setValue( true );
			this.callable.unlockTrigger();
		} );
	};
	this.setValue       = function ( isEvent = false ) {
		this.value.current = this.getActiveValue( isEvent );
	};
	this.getActiveValue = function ( isEvent = false ) {
		for ( const node of this.nodes ) {
			if ( node.dataset.custom ) {
				continue;
			}
			if ( node.checked ) {
				return node.value;
			}
		}

		if ( !this.hasCustom || !isEvent ) {
			return '';
		}

		return this.getCustomInput().value || true;
	};

	this.setNode = function ( node ) {
		node.jfbSync = this;
		/**
		 * It should be live collection for the case when items may change
		 */
		this.nodes = node.getElementsByClassName(
			'jet-form-builder__field radio-field' );

		this.rawName   = this.nodes[ 0 ].name;
		this.name      = getParsedName( this.rawName );
		this.inputType = 'radio';

		/**
		 * @type {HTMLElement|HTMLInputElement}
		 */
		this.wrapper = node;

		this.hasCustom = !!(
			this.lastNode()?.dataset?.custom
		);
	};
}

RadioData.prototype = Object.create( InputData.prototype );

RadioData.prototype.lastNode = function () {
	return this.nodes[ this.nodes.length - 1 ];
};

RadioData.prototype.getCustomInput = function () {
	const lastWrapper = this.lastNode().closest( '.custom-option' );

	return lastWrapper.querySelector( 'input.text-field' );
};

export default RadioData;