import InputData from './InputData';
import { isChangeType } from '../supports';

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
	};

	this.onClear = function () {
		this.silenceSet( '' );
	};
}

ChangeData.prototype = Object.create( InputData.prototype );

export default ChangeData;