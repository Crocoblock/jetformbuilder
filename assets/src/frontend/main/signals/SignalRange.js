import BaseSignal from './BaseSignal';
import { isRange } from '../supports';

/**
 * @property {RangeData} input
 */
function SignalRange() {
	BaseSignal.call( this );

	this.isSupported = function ( node, inputData ) {
		return isRange( node );
	};
	this.runSignal   = function () {
		const [ node ] = this.input.nodes;
		node.value     = this.input.value.current;

		this.input.numberNode.textContent = node.value;

		this.triggerJQuery( node );
	};
}

SignalRange.prototype = Object.create( BaseSignal.prototype );

export default SignalRange;