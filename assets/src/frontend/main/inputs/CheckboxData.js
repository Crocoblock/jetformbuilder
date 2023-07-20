import InputData from './InputData';
import ReactiveHook from '../reactive/ReactiveHook';
import { getParsedName } from './functions';

function sanitizeValue( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}

	return [ value ].filter(
		Boolean,
	);
}

/**
 * @property HTMLCollectionOf<HTMLInputElement> nodes
 */
function CheckboxData() {
	InputData.call( this );

	this.wrapper = null;

	this.isSupported  = function ( node ) {
		return (
			node.classList.contains( 'checkradio-wrap' ) &&
			node.querySelector( '.checkboxes-wrap' )
		);
	};
	this.addListeners = function () {
		this.enterKey = new ReactiveHook();

		this.wrapper.addEventListener( 'change', () => this.setValue() );
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

		if ( !this.isArray() ) {
			return;
		}

		this.sanitize( sanitizeValue );
	};
	this.setValue     = function () {
		this.value.current = this.getActiveValue();
	};

	this.setNode = function ( node ) {
		node.jfbSync = this;
		/**
		 * It should be live collection for the case when items may change
		 */
		this.nodes = node.getElementsByClassName(
			'jet-form-builder__field checkboxes-field' );

		this.rawName   = this.nodes[ 0 ].name;
		this.name      = getParsedName( this.rawName );
		this.inputType = 'checkbox';

		/**
		 * @type {HTMLElement|HTMLInputElement}
		 */
		this.wrapper = node;
	};

	this.getActiveValue = function () {
		const value = Array.from( this.nodes ).
			filter( item => item.checked ).
			map( item => item.value );

		return this.isArray() ? value : (
			value?.[ 0 ] ?? ''
		);
	};

	this.isArray = function () {
		return this.nodes.item( 0 )?.name?.includes?.( '[]' );
	};
}

CheckboxData.prototype = Object.create( InputData.prototype );

export default CheckboxData;