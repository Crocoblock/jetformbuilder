import InputData from './InputData';
import ReactiveHook from '../reactive/ReactiveHook';
import { STRICT_MODE } from '../signals/BaseSignal';
import { getParsedName } from './functions';

function RadioData() {
	InputData.call( this );

	this.wrapper = null;

	this.isSupported  = function ( node ) {
		return (
			node.classList.contains( 'checkradio-wrap' ) &&
			node.querySelector( '.radio-wrap' )
		);
	};
	this.addListeners   = function () {
		this.enterKey = new ReactiveHook();

		this.wrapper.addEventListener( 'change', () => this.setValue() );
		this.wrapper.addEventListener(
			'keydown',
			this.handleEnterKey.bind( this ),
		);

		!STRICT_MODE && jQuery( this.wrapper ).on( 'change', event => {
			if ( this.value.current == event.target.value ) {
				return;
			}
			this.callable.lockTrigger();
			this.setValue();
			this.callable.unlockTrigger();
		} );
	};
	this.setValue       = function () {
		this.value.current = this.getActiveValue();
	};
	this.getActiveValue = function () {
		for ( const node of this.nodes ) {
			if ( node.checked ) {
				return node.value;
			}
		}

		return '';
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
	};
}

RadioData.prototype = Object.create( InputData.prototype );

export default RadioData;