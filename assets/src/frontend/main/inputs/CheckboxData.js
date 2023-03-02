import InputData from './InputData';
import { isCheckbox } from '../supports';
import ReactiveHook from '../reactive/ReactiveHook';
import { STRICT_MODE } from '../signals/BaseSignal';

function CheckboxData() {
	InputData.call( this );

	this.isSupported  = function ( node ) {
		return isCheckbox( node );
	};
	this.addListeners = function () {
		this.enterKey = new ReactiveHook();

		for ( const node of this.nodes ) {
			node.addEventListener( 'change', () => this.setValue() );
			node.addEventListener(
				'keydown',
				this.handleEnterKey.bind( this ),
			);

			!STRICT_MODE && jQuery( node ).on( 'change', event => {
				this.callable.lockTrigger();
				this.setValue();
				this.callable.unlockTrigger();
			} );
		}

		if ( !this.isArray() ) {
			return;
		}

		this.sanitize(
			value => Array.isArray( value ) ? value : [ value ],
		);
	};
	this.setValue     = function () {
		this.value.current = this.getActiveValue();
	};

	this.merge = function ( inputData ) {
		this.nodes.push( ...inputData.getNode() );
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