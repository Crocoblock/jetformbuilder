import InputData from './InputData';
import { isChangeType } from '../supports';
import ReactiveHook from '../reactive/ReactiveHook';
import { STRICT_MODE } from '../signals/BaseSignal';

function ChangeData() {
	InputData.call( this );

	this.isSupported  = function ( node ) {
		return isChangeType( node );
	};
	this.addListeners = function () {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', event => {
			this.value.current = event.target.value;
		} );

		!STRICT_MODE && jQuery( node ).on( 'change', event => {
			if ( this.value.current == event.target.value ) {
				return;
			}
			this.callable.lockTrigger();
			this.value.current = event.target.value;
			this.callable.unlockTrigger();
		} );

		this.enterKey = new ReactiveHook();
		node.addEventListener( 'keydown', this.handleEnterKey.bind( this ) );
	};

	this.onClear = function () {
		this.silenceSet( '' );
	};
}

ChangeData.prototype = Object.create( InputData.prototype );

export default ChangeData;