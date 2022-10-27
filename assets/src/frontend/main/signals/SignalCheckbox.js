import BaseSignal from './BaseSignal';
import { isCheckbox } from '../supports';

function SignalCheckbox() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return isCheckbox( node );
	};
	this.runSignal   = function () {
		this.input.calcValue = 0;

		for ( const node of this.input.nodes ) {
			node.checked = this.input.value.current?.includes( node.value );

			if ( !node.checked ) {
				continue;
			}

			this.input.calcValue += parseFloat(
				node.dataset?.calculate ?? node.value,
			);
		}
	};
}

SignalCheckbox.prototype = Object.create( BaseSignal.prototype );

export default SignalCheckbox;