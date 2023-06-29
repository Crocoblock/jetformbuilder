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

	this.isSupported  = function ( node ) {
		return (
			node.classList.contains( 'checkradio-wrap' ) &&
			node.querySelector( '.checkboxes-wrap' )
		);
	};
	this.addListeners = function () {
		this.enterKey  = new ReactiveHook();

		for ( const node of this.nodes ) {
			node.addEventListener( 'change', () => this.setValue() );
			node.addEventListener(
				'keydown',
				this.handleEnterKey.bind( this ),
			);
		}

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
	};

	this.getActiveValue = function () {
		const value = Array.from( this.nodes ).
			filter( item => item.checked ).
			map( item => item.value );

		return this.isArray() ? value : (
			value?.[ 0 ] ?? ''
		);
	};
}

CheckboxData.prototype = Object.create( InputData.prototype );

export default CheckboxData;