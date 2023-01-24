import BaseSignal from './BaseSignal';
import { isRadio } from '../supports';

function SignalRadio() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return isRadio( node );
	};
	this.runSignal   = function () {
		this.input.calcValue = 0;

		for ( const node of this.input.nodes ) {
			node.checked = this.input.value.current === node.value;

			if ( !node.checked ) {
				continue;
			}

			this.input.calcValue += parseFloat(
				node.dataset?.calculate ?? node.value,
			);

			break;
		}
	};
}

SignalRadio.prototype = Object.create( BaseSignal.prototype );

export default SignalRadio;